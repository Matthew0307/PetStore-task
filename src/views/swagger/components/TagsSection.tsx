import { Dispatch, SetStateAction, useContext } from "react";
import { SwaggerContext } from "../../../context/swaggerContext/swaggerContext";
import { Tag } from "./Tag";

type TagsSectionProps = {
  tag: string;
  setShowPath: Dispatch<SetStateAction<boolean>>;
  showPaths: boolean;
};

export const TagsSection = ({
  tag,
  setShowPath,
  showPaths,
}: TagsSectionProps) => {
  const { tags } = useContext(SwaggerContext);
  return (
    <div
      onClick={() => setShowPath((prev) => !prev)}
      className="px-5 m-1 rounded bg-slate-300"
    >
      {tags.map(
        ({ description, name }) =>
          name === tag && (
            <Tag
              showPaths={showPaths}
              key={description}
              name={name}
              description={description}
            />
          )
      )}
    </div>
  );
};
