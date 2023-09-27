import { Between, Repository } from "typeorm";
import { CovidCase } from "../entity/CovidCase";
import { CovidCaseDTO } from "../dto/CovidCaseDTO";

export class CovidService {
  constructor(private collection: Repository<CovidCase>) {}

  addCovidCase = (covidCase: CovidCaseDTO) => this.collection.save(new CovidCase(covidCase.userId));

  getCovidCases = (startDate: Date, endDate: Date) =>
    this.collection.find({
      select: {
        userId: true,
      },
      where: { created_at: Between(startDate, endDate) },
    });
}
