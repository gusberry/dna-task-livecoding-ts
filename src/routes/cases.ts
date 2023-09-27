import { FastifyPluginAsync } from "fastify";
import { CovidCase } from "../entity/CovidCase";
import { AppDataSource } from "../data-source";
import createCovidCaseSchema from "../schemas/createCovidCaseSchema";
import { CovidService } from "../services/CovidService";
import getCovidCasesSchema from "../schemas/getCovidCasesSchema";

interface GetAllCovidCasesRequestData {
  Querystring: {
    startDate: string;
    endDate: string;
  };
}

interface CreateCovidCaseRequestData {
  Body: { userId: string };
}

const cases: FastifyPluginAsync = async (fastify): Promise<void> => {
  const covidService = new CovidService(fastify.orm.getRepository(CovidCase));

  fastify.get<GetAllCovidCasesRequestData>("/cases", { schema: getCovidCasesSchema }, async function (req) {
    // TODO: error handling
    return covidService.getCovidCases(new Date(req.query.startDate), new Date(req.query.endDate));
  });

  fastify.post<CreateCovidCaseRequestData>("/cases", { schema: createCovidCaseSchema }, async function (req, res) {
    // TODO: error handling
    const covidCase = await covidService.addCovidCase(req.body);

    res.code(201).send(covidCase);
  });
};

export default cases;
