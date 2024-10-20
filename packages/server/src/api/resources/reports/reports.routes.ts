import Router from 'koa-router';
import { reportsController } from '.';
import { requestLogger } from '../../middleware';

const reportsRoutes = new Router({ prefix: '/reports' });

reportsRoutes.post('/', (ctx, next) => reportsController.add(ctx, next), requestLogger);
reportsRoutes.get('/', (ctx, next) => reportsController.get(ctx, next), requestLogger);
reportsRoutes.post('/_search', (ctx, next) => reportsController.search(ctx, next), requestLogger);
export default reportsRoutes.routes();
