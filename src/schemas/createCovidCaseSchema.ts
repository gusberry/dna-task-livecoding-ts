import caseSchema from "./caseSchema";

export default {
  summary: "Register COVID case",
  body: {
    type: "object",
    properties: {
      userId: { type: "string" },
    },
  },
  response: {
    201: {
      type: "object",
      properties: caseSchema,
    },
  },
};
