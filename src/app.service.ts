import { Injectable } from '@nestjs/common';
import { GoogleSheetsService } from './google.service';

@Injectable()
export class AppService {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}
  getHello(): string {
    return 'Hello World!';
  }

  // {"person":{"name":"Thevindu","value":"Thevindu"},"date":"2023-02-12T18:30:00.000Z","description":"iurowor","amount":4,"eachThevindu":2,"eachRenuja":0,"eachNipun":0,"eachNaveen":2,"eachNeethamadu":0}
  async createExpense(data) {
    if (!data) {
      return 'No data';
    }

    const date = new Date(data.date).toLocaleDateString();

    if (data.eachThevindu === 0) {
      data.eachThevindu = '';
    } else if (data.eachRenuja === 0) {
      data.eachRenuja = '';
    } else if (data.eachNipun === 0) {
      data.eachNipun = '';
    } else if (data.eachNaveen === 0) {
      data.eachNaveen = '';
    } else if (data.eachNeethamadu === 0) {
      data.eachNeethamadu = '';
    }

    const values = [
      date,
      data.description,
      data.amount,
      data.eachThevindu,
      data.eachRenuja,
      data.eachNipun,
      data.eachNaveen,
      data.eachNeethamadu,
    ];
    // call google sheets api
    // return response
    const sheetId = '1NugX-fyWj2cntBkYId1Qx8tZda9hHVw97J2yPcmb4wc';
    const range = 'APP!A2:H2';
    return await this.googleSheetsService.addRecord(values, sheetId, range);
  }

  async createPaid(data) {
    if (!data) {
      return 'No data';
    }

    switch (data.person.name) {
      case 'Thevindu':
        data.eachThevindu = -data.amount;
        data.eachRenuja = '';
        data.eachNipun = '';
        data.eachNaveen = '';
        data.eachNeethamadu = '';
        break;
      case 'Renuja':
        data.eachRenuja = -data.amount;
        data.eachThevindu = '';
        data.eachNipun = '';
        data.eachNaveen = '';
        data.eachNeethamadu = '';
        break;
      case 'Nipun':
        data.eachNipun = -data.amount;
        data.eachThevindu = '';
        data.eachRenuja = '';
        data.eachNaveen = '';
        data.eachNeethamadu = '';
        break;
      case 'Naveen':
        data.eachNaveen = -data.amount;
        data.eachThevindu = '';
        data.eachRenuja = '';
        data.eachNipun = '';
        data.eachNeethamadu = '';
        break;
      case 'Neethamadu':
        data.eachNeethamadu = -data.amount;
        data.eachThevindu = '';
        data.eachRenuja = '';
        data.eachNipun = '';
        data.eachNaveen = '';
        break;
    }

    const date = new Date(data.date).toLocaleDateString();
    data.description = 'Paid by ' + data.person.name;

    const values = [
      date,
      data.description,
      data.amount,
      data.eachThevindu,
      data.eachRenuja,
      data.eachNipun,
      data.eachNaveen,
      data.eachNeethamadu,
    ];
    // call google sheets api
    // return response
    const sheetId = '1NugX-fyWj2cntBkYId1Qx8tZda9hHVw97J2yPcmb4wc';
    const range = 'APP!A2:H2';
    return await this.googleSheetsService.addRecord(values, sheetId, range);
  }
}
