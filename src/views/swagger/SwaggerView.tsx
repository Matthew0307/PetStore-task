import { SwaggerContextProvider } from "../../context/swaggerContext/swaggerContext";
import { SwaggerList } from "./SwaggerList";

export const SwaggerView = () => {
  return (
    <SwaggerContextProvider>
      <SwaggerList />
    </SwaggerContextProvider>
  );
};
