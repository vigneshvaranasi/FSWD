import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env) {
    const prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const res = await prisma.user.create({
        data: {
          name: 'Vignesh',
          email: 'vignesh' + Math.floor(Math.random() * 10000) + '@gmail.com',
        },
      });
      const users = await prisma.user.findMany();

      return new Response(`user created:${JSON.stringify(res)}\nAll Users: ${JSON.stringify(users)}`);
    } catch (err) {
      console.error(err);
      return new Response('Internal Server Error', { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  },
};
