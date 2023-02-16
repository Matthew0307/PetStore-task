import { useState } from "react";
import { SwaggerPath } from "../../../queries/swaggerService";
import { Path } from "./Path";
import { TagsSection } from "./TagsSection";

type PathListProps = {
  tag: string;
  paths: SwaggerPath[];
};
export const PathList = ({ tag, paths }: PathListProps) => {
  const [showPaths, setShowPaths] = useState(false);
  return (
    <>
      <TagsSection setShowPath={setShowPaths} showPaths={showPaths} tag={tag} />
      {showPaths &&
        paths.map((path, index) => <Path key={index} path={path} />)}
    </>
  );
};
