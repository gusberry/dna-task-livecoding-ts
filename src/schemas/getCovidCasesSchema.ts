import caseSchema from "./caseSchema";

export default {
  summary: "List cases in time range",
  response: {
    200: {
      type: "array",
      items: {
        properties: caseSchema,
      },
    },
  },
  querystring: {
    type: "object",
    properties: {
      startDate: { type: "string" },
      endDate: { type: "string" },
    },
  },
};
