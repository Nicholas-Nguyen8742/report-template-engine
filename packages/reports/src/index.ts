import templateRepository from './templates';

// class ReportRepository {
//   constructor() {

//   }

//   async generate(report: string, _data: any): Promise<Buffer | Blob | undefined> {
//     if (report in templateRepository) {
//       const generated = await templateRepository[report].render();
//       return generated;
//     }

//     throw new Error(`${report} is not implemented yet.`);
//   }
// }

export {
  templateRepository
};
