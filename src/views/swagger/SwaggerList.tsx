import { useContext } from "react";
import { SwaggerContext } from "../../context/swaggerContext/swaggerContext";
import { PathList } from "./components/PathList";

export const SwaggerList = () => {
  const { groupedPaths, info } = useContext(SwaggerContext);

  const dataOutput = Object.entries(groupedPaths);

  return (
    <div className="font-sans flex-col   items-center">
      <div className=" bg-slate-200 px-40 py-10">
        <h1 className="text-xl font-bold">{info.title}</h1>
        <a className="font-light">{info.description}</a>
      </div>
      <div className="flex-col flex px-40 py-10 ">
        {dataOutput.map(([tag, paths]) => (
          <PathList key={tag} tag={tag} paths={paths} />
        ))}
      </div>
    </div>
  );
};
