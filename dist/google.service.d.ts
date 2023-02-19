export declare class GoogleSheetsService {
    private readonly auth;
    private readonly sheets;
    constructor();
    addRecord(values: any[], sheetId: string, range: string): Promise<any>;
}
