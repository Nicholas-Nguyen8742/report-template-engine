import ReportsController from './reports.controller';
import ReportsService from './reports.service';

const reportsService = new ReportsService();
const reportsController = new ReportsController(reportsService);

export {
  reportsController,
};
