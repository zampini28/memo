import {MigrationInterface, QueryRunner} from "typeorm";

export class fkProfile1697545409552 implements MigrationInterface {
    name = 'fkProfile1697545409552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profileId" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_b1bda35cdb9a2c1b777f5541d87" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_b1bda35cdb9a2c1b777f5541d87"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profileId"`);
    }

}
