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

    async create(data: AppDto): Promise<any> {
        return null;
    }

    async getAll(): Promise<any> {
        await this.init();
        return await this.repository.find();
    }

    async getOne(id: string): Promise<any> {
        return null;
    }

    async update(id: string, data: any): Promise<any> {
        return null;
    }

    async deleteOne(id: string): Promise<any> {
        return null;
    }
}
