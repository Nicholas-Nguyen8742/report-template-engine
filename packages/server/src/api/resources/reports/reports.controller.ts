import { Context, Next } from 'koa';
import fs, { ReadStream } from 'fs';
import { logger } from '../../../utils';
import ReportsService from './reports.service';

export class ReportsController {
  constructor(private reportsService: ReportsService) {  }

  async streamToBuffer(stream: ReadStream): Promise<Buffer> {
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  };

  async add(ctx: Context, next: Next) {
    try {
      const reportFile = ctx.request.files?.file;
      console.log(typeof reportFile);
      console.log(JSON.stringify(reportFile));
      if (!reportFile) {
        ctx.status = 400;
        ctx.body = {
          message: 'Missing body'
        }
        return;
      }

      // @ts-ignore
      const fileStream = fs.createReadStream(reportFile.filepath as string);
      const fileBuffer = await this.streamToBuffer(fileStream);

      await this.reportsService.add();
      ctx.status = 201;
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

  async get(_ctx: Context, next: Next) {
    await next();
    return;
  }

  async search(ctx: Context, next: Next) {
    console.log('answer: ', ctx.request.body);

    try {
      const question = ctx.request.body?.question as string;
      if (!question) {
        ctx.status = 400;
        ctx.body = {
          message: 'Missing body'
        }
        return;
      }


      const answer = '';
      console.log('answer: ', answer);

      ctx.status = 200;
      ctx.body = {
        question,
        answer,
      }
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
