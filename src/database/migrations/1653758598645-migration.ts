import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1653758598645 implements MigrationInterface {
    name = 'migration1653758598645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "tid" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "theme" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "theme" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "letter" ALTER COLUMN "tid" SET NOT NULL`);
    }

}
