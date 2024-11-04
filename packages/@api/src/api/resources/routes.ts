import Router from 'koa-router';
import { reportsRoutes } from './reports';

const router = new Router({
  prefix: '/api'
});

router.use(
  reportsRoutes,
);

export {
  router
}
