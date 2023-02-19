import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleSheetsService {
  private readonly auth: any;
  private readonly sheets: any = '1NugX-fyWj2cntBkYId1Qx8tZda9hHVw97J2yPcmb4wc'

  constructor() {
    // Load the credentials from the JSON key file
    const auth = new google.auth.GoogleAuth({
      keyFile: '.credentials.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Authenticate with the Google Sheets API
    const sheets = google.sheets({
      version: 'v4',
      auth: auth,
    });

    this.auth = auth;
    this.sheets = sheets;
  }

  async addRecord(values: any[], sheetId: string, range: string) {
    // Build the request body
    const request = {
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [values],
      },
    };

    // Send the request to add the record
    const response = await this.sheets.spreadsheets.values.append(request);
    return response.data;
  }
}
