import AppDto from '../dto/App.Dto';
import Model from '../model';

export class AppService extends Model {
    constructor() {
        super();
    }

    async createLoan(data: AppDto): Promise<any> {
        return null;
    }

    async getAllLoan(): Promise<any> {
        return null;
    }

    async getOneLoan(id: string): Promise<any> {
        return null;
    }

    async updateLoan(id: string, data: any): Promise<any> {
        return null;
    }

    async deleteOneLoan(id: string): Promise<any> {
        return null;
    }
}
