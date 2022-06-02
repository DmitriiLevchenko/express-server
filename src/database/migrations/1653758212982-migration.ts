import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1653758212982 implements MigrationInterface {
    name = 'migration1653758212982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" ADD "theme" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" DROP COLUMN "tid"`);
        await queryRunner.query(`ALTER TABLE "letter" ADD "tid" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" DROP COLUMN "tid"`);
        await queryRunner.query(`ALTER TABLE "letter" ADD "tid" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" DROP COLUMN "theme"`);
        await queryRunner.query(`ALTER TABLE "letter" DROP COLUMN "email"`);
    }

}
