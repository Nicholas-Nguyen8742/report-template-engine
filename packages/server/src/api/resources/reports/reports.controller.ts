import { Context, Next } from 'koa';
import { logger } from '../../../utils';
import ReportsService from './reports.service';

export class ReportsController {
  constructor(private reportsService: ReportsService) {  }

  bufferToBlob(buffer: Buffer): Blob {
    const buff = Buffer.from(buffer);
    const blob = new Blob([buff]);
    return blob;
  };

  async get(ctx: Context, next: Next) {
    try {
      const contentType = ctx.request.type;
      if (!contentType) {
        ctx.status = 400;
        ctx.body = {
          message: 'Missing file type'
        }
        return;
      }

      const filename = 'HelloWorld';

      const report = await this.reportsService.get();
      if (!report) {
        return;
      }
      ctx.set('Content-Type', contentType);
      ctx.set('Content-Disposition', `attachment; filename=${filename}.pdf`);
      ctx.set('Access-Control-Expose-Headers', 'Content-Disposition');
      const stream  = report as unknown as ReadableStream;
      ctx.status = 200;
      ctx.body = stream;
      return;
    } catch(e) {
      logger.error(e);
      ctx.status = 500;
      ctx.body = {
        message: 'Internal Server Error',
      }

    } finally {
      await next();
    }
  }
}

export default ReportsController;
