import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((t) =>
    Promise.all([
      context.sequelize.models.Account.bulkCreate(
        [
          {
            balance: 1000,
            r_user_id: 1,
          },
        ],
        { transaction: t },
      ),
    ]),
  );
