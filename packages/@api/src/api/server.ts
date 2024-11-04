import Koa from 'koa';
import cors from '@koa/cors';
import compress from 'koa-compress';
import { router } from './resources/routes';
import { logger, PORT } from '../utils';

const app = new Koa();

app
.use(cors({
  origin: '*',
  exposeHeaders: ['ETag', 'If-None-Match', 'Content-Disposition'],
}))
.use(compress())
.use(router.routes())
.use(router.allowedMethods());

app.listen(PORT, () => {
  logger.info(`Server listening on PORT: ${PORT}`);
});

export {
  app
}
