import { SwaggerPath } from "../../../queries/swaggerService";
import { DetailsSection } from "./DetailsSection";

type PathProps = {
  path: SwaggerPath;
};
export const Path = ({ path }: PathProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 m-3 border-slate-500 ">
      {Object.entries(path).map(([pathName, pathDetails]) =>
        Object.entries(pathDetails).map(
          ([methodName, { parameters, responses, description }]) => (
            <DetailsSection
              key={`${pathName}&${methodName}`}
              pathName={pathName}
              methodName={methodName}
              parameters={parameters}
              responses={responses}
              description={description}
            />
          )
        )
      )}
    </div>
  );
};
