import arrowIcon from "../../../icons/down-arrow.png";

type TagProps = {
  name: string;
  description: string;
  showPaths: boolean;
};

export const Tag = ({ name, description, showPaths }: TagProps) => {
  return (
    <div className="flex py-5 gap-2 items-center">
      <h1 className="text-xl font-bold">{name}</h1> <h3>{description}</h3>
      <img
        className={showPaths ? "rotate-180" : ""}
        width={12}
        height={12}
        src={arrowIcon}
      />
    </div>
  );
};
