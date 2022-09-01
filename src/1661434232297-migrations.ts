import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1661434232297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('alter table post add file_path varchar(30)')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('post', 'file_path')
    }

}
