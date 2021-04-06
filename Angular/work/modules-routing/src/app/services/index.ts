import { correctPathService } from "./correctPath.servece";
import { FetchDataService } from "./fetch-data.service";
import { GetDataService } from "./get-data.service";

export const services = [
    correctPathService,
    GetDataService,
    FetchDataService
];

export * from './correctPath.servece';