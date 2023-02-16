type Contact = {
  email: string;
};
type License = {
  name: string;
  url: string;
};
export type SwaggerInfo = {
  contact: Contact;
  license: License;
  description: string;
  termsOfService: string;
  title: string;
  version: string;
};

export type Parameter = {
  description: string;
  in: string;
  name: string;
  required: boolean;
};

export type SwaggerResponse = {
  [T in string]: {
    description: string;
  };
};

type SwaggerMethod = {
  [T in string]: {
    parameters: Parameter[];
    responses: SwaggerResponse;
    tags: string[];
    description: string;
  };
};
export type Tag = {
  description: string;
  name: string;
};

export type GroupedObjectType = {
  [T in string]: SwaggerPath[];
};

export type SwaggerPath = {
  [T in string]: SwaggerMethod;
};

export type SwaggerResponseType = {
  info: SwaggerInfo;
  paths: SwaggerPath;
  tags: Tag[];
};

function assertIsSwaggerData(
  data: unknown
): asserts data is SwaggerResponseType {
  if (typeof data != "object" || data == null) {
    throw new Error("Invalid Response");
  }
}

export async function fetchSwaggerData() {
  const res = await fetch("https://petstore.swagger.io/v2/swagger.json");
  if (!res) {
    return;
  }
  const data = await res.json();
  assertIsSwaggerData(data);
  return data;
}
