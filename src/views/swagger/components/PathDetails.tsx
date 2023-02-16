type PathDetailsProps = {
  name: string;
  description: string;
};

export const PathDetails = ({ name, description }: PathDetailsProps) => {
  return (
    <>
      <p>{name}</p>
      <p>{description}</p>
    </>
  );
};
