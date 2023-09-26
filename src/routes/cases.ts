import {FastifyPluginAsync} from 'fastify'
import {CovidCase} from "../entity/CovidCase";
import {AppDataSource} from "../data-source";

const cases: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{ Querystring: {}, Params: {}, Body: {} }>('/cases', async function (req) {
    return AppDataSource.manager.find(CovidCase)
  })
  fastify.post<{ Querystring: {}, Params: {}, Body: { userId: string } }>('/cases', {
    schema: {
      body: {
        type: 'object',
        properties: {
          userId: { type: 'string' }
        }
      }
    }
  }, async function (req) {
    return AppDataSource.manager.save(new CovidCase(req.body.userId))
  })
}

export default cases;
