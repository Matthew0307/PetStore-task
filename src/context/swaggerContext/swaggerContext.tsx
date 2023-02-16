import { createContext, FC, useEffect, useMemo, useState } from "react";
import {
  fetchSwaggerData,
  GroupedObjectType,
  SwaggerInfo,
  SwaggerResponseType,
  Tag,
} from "../../queries/swaggerService";
import {
  ISwaggerContextProvider,
  SwaggerContextProps,
} from "./swaggerContext.types";

const initialValues = {
  info: {
    contact: { email: "" },
    description: "",
    title: "",
    license: { name: "", url: "" },
    version: "",
    termsOfService: "",
  },
  tags: [{ description: "", name: "" }],

  groupedPaths: {},
};

export const SwaggerContext = createContext<SwaggerContextProps>(initialValues);

export const SwaggerContextProvider: FC<ISwaggerContextProvider> = ({
  children,
}) => {
  const [isReady, setReady] = useState(false);
  const [data, setData] = useState<SwaggerResponseType>();
  const [info, setInfo] = useState<SwaggerInfo>(initialValues.info);
  const [tags, setTags] = useState<Tag[]>(initialValues.tags);

  useEffect(() => {
    if (!isReady) {
      setReady(true);
      return;
    }

    fetchSwaggerData().then((res) => {
      if (!res) {
        return;
      }
      setData(res);
    });
  }, [isReady]);

  useEffect(() => {
    if (!data) {
      return;
    }
    setInfo(data.info);
    setTags(data.tags);
  }, [data]);

  const groupedPaths = useMemo(() => {
    if (!data) {
      return {};
    }

    const paths = Object.entries(data.paths);

    return paths.reduce((prev, curr) => {
      const [key, value] = curr;
      const currentTags = Object.keys(prev);
      const methodArray = Object.entries(value);
      let groupedObject: GroupedObjectType = {};

      methodArray.forEach(([keyRes, valueRes]) => {
        valueRes.tags.forEach((tag) => {
          if (currentTags.includes(tag)) {
            const isAlreadyExists = prev[tag].find((item) => item[key]);

            if (isAlreadyExists) {
              return;
            }

            const arrayToUpdate = prev[tag];
            arrayToUpdate.push({ [key]: value });
            groupedObject = {
              ...groupedObject,
              [tag]: arrayToUpdate,
            };

            return;
          }
          const newItem = { [key]: value };
          groupedObject = {
            ...groupedObject,
            [tag]: [newItem],
          };
        });
      });

      return { ...prev, ...groupedObject };
    }, {} as GroupedObjectType);
  }, [data]);

  const swaggerContextProviderValue = useMemo(
    () => ({
      info,
      tags,
      groupedPaths,
    }),
    [info, tags, groupedPaths]
  );
  return (
    <SwaggerContext.Provider value={swaggerContextProviderValue}>
      {children}
    </SwaggerContext.Provider>
  );
};
