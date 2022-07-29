import AppDto from '../dto/App.Dto';
import { User } from '../entity/user-entity';
import Model from '../../shared/model/Model';
import { Repository } from 'typeorm';

export class AppService {
    private repository: Repository<User>;

    constructor(repository: Repository<User>) {
        this.repository = repository;
    }

    // async init() {
    //     await this.modelConfig;
    //     await this.repository;
    // }

    async create(data: AppDto): Promise<any> {
        return null;
    }

    async getAll(): Promise<any> {
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
