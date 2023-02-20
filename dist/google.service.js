"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheetsService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
let GoogleSheetsService = class GoogleSheetsService {
    constructor() {
        this.sheets = '1NugX-fyWj2cntBkYId1Qx8tZda9hHVw97J2yPcmb4wc';
        const auth = new googleapis_1.google.auth.GoogleAuth({
            keyFile: './config/credentials.json',
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = googleapis_1.google.sheets({
            version: 'v4',
            auth: auth,
        });
        this.auth = auth;
        this.sheets = sheets;
    }
    async addRecord(values, sheetId, range) {
        const request = {
            spreadsheetId: sheetId,
            range: range,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [values],
            },
        };
        const response = await this.sheets.spreadsheets.values.append(request);
        return response.data;
    }
};
GoogleSheetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleSheetsService);
exports.GoogleSheetsService = GoogleSheetsService;
//# sourceMappingURL=google.service.js.map