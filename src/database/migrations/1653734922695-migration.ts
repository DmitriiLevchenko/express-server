import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1653734922695 implements MigrationInterface {
    name = 'migration1653734922695'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(1000) NOT NULL, "email" character varying(1000) NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."letter_type_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`CREATE TABLE "letter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying(1000) NOT NULL, "tid" character varying NOT NULL, "type" "public"."letter_type_enum" NOT NULL DEFAULT '1', "departmentId" uuid, CONSTRAINT "PK_7a85cf0e444dff7c656a31b32bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question" character varying NOT NULL, "answer" character varying NOT NULL, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "letter" ADD CONSTRAINT "FK_2beaae8636426fe4461685e12c8" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "letter" DROP CONSTRAINT "FK_2beaae8636426fe4461685e12c8"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "letter"`);
        await queryRunner.query(`DROP TYPE "public"."letter_type_enum"`);
        await queryRunner.query(`DROP TABLE "department"`);
    }

}
