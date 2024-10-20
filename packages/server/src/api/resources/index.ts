import Router from 'koa-router';
import linksRoutes from './reports/reports.routes';
import { requestLogger } from '../middleware';

const router = new Router({
  prefix: '/api'
});

router.get('/', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    id: 1,
    message: 'adsadasdfa'
  }
  await next();
}, requestLogger);

router.use(
  linksRoutes,
);

export default router;
