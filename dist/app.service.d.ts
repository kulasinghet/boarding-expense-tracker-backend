import { GoogleSheetsService } from './google.service';
export declare class AppService {
    private readonly googleSheetsService;
    constructor(googleSheetsService: GoogleSheetsService);
    getHello(): string;
    createExpense(data: any): Promise<any>;
    createPaid(data: any): Promise<any>;
}
