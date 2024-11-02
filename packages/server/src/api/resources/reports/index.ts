import Router from 'koa-router';
import { requestLogger } from '../../middleware';
import ReportsController from './reports.controller';
import ReportsService from './reports.service';

const reportsService = new ReportsService();
const reportsController = new ReportsController(reportsService);

const reportsRoutes = new Router({ prefix: '/reports' })
  .get('/', (ctx, next) => reportsController.get(ctx, next), requestLogger)
  .routes();

export {
  reportsController,
  reportsRoutes
};
