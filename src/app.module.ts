import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleSheetsService } from './google.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleSheetsService],
})
export class AppModule {}
