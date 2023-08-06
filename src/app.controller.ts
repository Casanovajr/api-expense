import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Create';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}
