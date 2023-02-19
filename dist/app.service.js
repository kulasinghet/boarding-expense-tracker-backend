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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const google_service_1 = require("./google.service");
let AppService = class AppService {
    constructor(googleSheetsService) {
        this.googleSheetsService = googleSheetsService;
    }
    getHello() {
        return 'Hello World!';
    }
    async createExpense(data) {
        if (!data) {
            return 'No data';
        }
        const date = new Date(data.date).toLocaleDateString();
        if (data.eachThevindu === 0) {
            data.eachThevindu = '';
        }
        else if (data.eachRenuja === 0) {
            data.eachRenuja = '';
        }
        else if (data.eachNipun === 0) {
            data.eachNipun = '';
        }
        else if (data.eachNaveen === 0) {
            data.eachNaveen = '';
        }
        else if (data.eachNeethamadu === 0) {
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
        const sheetId = '1NugX-fyWj2cntBkYId1Qx8tZda9hHVw97J2yPcmb4wc';
        const range = 'APP!A2:H2';
        return await this.googleSheetsService.addRecord(values, sheetId, range);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [google_service_1.GoogleSheetsService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map