import { MigrationInterface, QueryRunner } from 'typeorm';

export class app1652885073155 implements MigrationInterface {
    name = 'app1652885073155';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "app_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "dateCreated" TIMESTAMP NOT NULL DEFAULT now(), "dateUpdated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_785e980b5ae9d53bf5e6dc74c85" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "app_entity"`);
    }
}
