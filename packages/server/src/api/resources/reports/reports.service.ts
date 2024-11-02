import { templateRepository } from '@api/reports';

export default class ReportsService {
  constructor() { }

  async get() {
    try {
      const template = await templateRepository['LandscapeHeaderFooter']();
      console.log(template);
  
      return template;
    } catch(e) {
      console.error(e);
      return;
    }
  }
}
