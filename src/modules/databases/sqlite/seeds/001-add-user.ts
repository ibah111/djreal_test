import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';

export const up: MigrationFn<QueryInterface> = ({ context }) =>
  context.sequelize.transaction((t) =>
    Promise.all([
      context.sequelize.models.User.bulkCreate(
        [
          {
            name: 'admin',
          },
        ],
        { transaction: t },
      ),
    ]),
  );
