import { ReactNode } from "react";
import {
  GroupedObjectType,
  SwaggerInfo,
  SwaggerResponseType,
  Tag,
} from "../../queries/swaggerService";

export type SwaggerContextProps = {
  info: SwaggerInfo;
  tags: Tag[];
  groupedPaths: GroupedObjectType;
};

export interface ISwaggerContextProvider {
  children: ReactNode;
}
