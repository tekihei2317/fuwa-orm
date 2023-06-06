import { FuwaClient } from '@fuwa-orm/client/d1';
import { ModelGateways } from '../database/fuwa-orm.js';

export interface Env {
  DB: D1Database;
}

export default {
  async fetch(_request: Request, env: Env): Promise<Response> {
    const db = FuwaClient.create<ModelGateways>(env.DB);

    await db.user.deleteMany({});
    const user = await db.user.create({
      data: {
        email: 'tekihei2317@example.com',
      },
    });
    const result = await db.user.createMany({
      data: [{ email: 'a@example.com' }, { email: 'b@example.com' }],
    });
    const updatedUser = await db.user.update({
      where: { email: 'tekihei2317@example.com' },
      data: { name: 'test' },
    });
    const deletedUser = await db.user.delete({
      where: { email: 'tekihei2317@example.com' },
    });

    return Response.json({ user, updatedUser, deletedUser, result });
  },
};
