type DetailsListProps = {
  children: React.ReactNode;
  title: string;
};

export const DetailsList = ({ title, children }: DetailsListProps) => {
  return (
    <div className="bg-slate-200 m-2">
      <h2 className="font-bold border-2 p-2 border-slate-500 rounded">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-2 p-2">
        <p>Name</p>
        <p>Description</p>

        <p className="col-span-2 h-1 bg-slate-500 rounded" />

        {children}
      </div>
    </div>
  );
};
