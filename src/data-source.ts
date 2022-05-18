import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const DataSourceConfig = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [__dirname + '/**/entity/*{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/migrations',
    },
} as DataSourceOptions);

console.log(__dirname + '**/entity/*{.ts,.js}');
// entities: ['src/**/entity/*{.ts,.js}'],
export default DataSourceConfig;
