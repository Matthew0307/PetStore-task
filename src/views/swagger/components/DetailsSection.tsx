import { useState } from "react";
import { Parameter, SwaggerResponse } from "../../../queries/swaggerService";
import { DetailsList } from "./DetailsList";
import { PathDetails } from "./PathDetails";
import { PathTitle } from "./PathTitle";

type DetailsSectionProps = {
  parameters: Parameter[];
  responses: SwaggerResponse;
  methodName: string;
  pathName: string;
  description: string;
};
export const DetailsSection = ({
  parameters,
  responses,
  methodName,
  pathName,
  description,
}: DetailsSectionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border-2 border-slate-500 rounded">
      <PathTitle
        showPathDetails={setShowDetails}
        detailsVisible={showDetails}
        methodName={methodName}
        pathName={pathName}
        description={description}
      />
      {showDetails && (
        <>
          <DetailsList title="Parameters">
            {parameters.map(({ description, name }) => (
              <PathDetails key={name} description={description} name={name} />
            ))}
          </DetailsList>

          <DetailsList title="Responses">
            {Object.entries(responses).map(
              ([responseStatus, { description }]) => (
                <PathDetails
                  key={description}
                  description={description}
                  name={responseStatus}
                />
              )
            )}
          </DetailsList>
        </>
      )}
    </div>
  );
};
