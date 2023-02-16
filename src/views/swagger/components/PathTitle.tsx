import { Dispatch, SetStateAction } from "react";
import { getColor } from "./helpers/pathHelper";
import arrowIcon from "../../../icons/down-arrow.png";

type PathTitleProps = {
  pathName: string;
  methodName: string;
  showPathDetails: Dispatch<SetStateAction<boolean>>;
  detailsVisible: boolean;
  description: string;
};
export const PathTitle = ({
  pathName,
  methodName,
  showPathDetails,
  detailsVisible,
  description,
}: PathTitleProps) => {
  return (
    <div
      onClick={() => showPathDetails((prev) => !prev)}
      className="flex p-2 items-center px-2 rounded bg-slate-300"
    >
      <p
        className={`p-2 w-24 text-center  text-slate-200 uppercase rounded font-bold
          ${getColor(methodName)}`}
      >
        {methodName}
      </p>
      <p className="flex p-2 font-bold gap-2 items-center">{pathName}</p>

      <p className="flex p-2 font-light gap-2 items-center">{description}</p>
      <img
        className={detailsVisible ? "rotate-180 " : ""}
        width={12}
        height={12}
        src={arrowIcon}
      />
    </div>
  );
};
