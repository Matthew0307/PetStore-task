export const getColor = (name: string) => {
  switch (name) {
    case "post": {
      return "bg-green-600";
    }
    case "put": {
      return "bg-yellow-600";
    }
    case "get": {
      return "bg-blue-600";
    }
    case "delete": {
      return "bg-red-600";
    }
    default: {
      return "bg-green-600";
    }
  }
};
