import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create-expense')
  async createExpense(@Body() data): Promise<string> {
    const addRecord = await this.appService.createExpense(data);
    const paidRecord = await this.appService.createPaid(data);

    if (addRecord && paidRecord) {
      return 'Success';
    } else {
      return 'Failed';
    }
  }
}
