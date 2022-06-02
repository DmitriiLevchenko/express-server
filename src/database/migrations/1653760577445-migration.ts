import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1653760577445 implements MigrationInterface {
    name = 'migration1653760577445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" RENAME COLUMN "theme" TO "subject"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" RENAME COLUMN "subject" TO "theme"`);
    }

}
