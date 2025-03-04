import { DataTypes, QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

const tableName = 'Accounts';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((t) =>
    Promise.all([
      context.createTable(
        tableName,
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          r_user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date(),
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date(),
          },
          deletedAt: {
            allowNull: true,
            type: DataTypes.DATE,
          },
        },
        { transaction: t },
      ),
    ]),
  );
export const down: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((t) =>
    Promise.all([context.dropTable(tableName, { transaction: t })]),
  );
