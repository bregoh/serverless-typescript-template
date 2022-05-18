import AppDto from '../dto/App.Dto';
import { AppEntity } from '../entity/app-entity';
import Model from '../../shared/model/Model';
import { Repository } from 'typeorm';
import DataSourceConfig from '../../data-source';

export class AppService extends Model {
    private repository: Repository<AppEntity>;

    constructor() {
        super();
        this.repository = DataSourceConfig.getRepository(AppEntity);
    }

    async init() {
        await this.modelConfig;
        await this.repository;
    }

    async createLoan(data: AppDto): Promise<any> {
        return null;
    }

    async getAllLoan(): Promise<any> {
        await this.init();
        return await this.repository.find();
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
