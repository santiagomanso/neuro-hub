import NextAuth, { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role: 'ADMIN' | 'OWNER' | 'STAFF' | 'MANAGER';
    } & DefaultSession['user'];
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'ADMIN' | 'OWNER' | 'STAFF' | 'MANAGER';
  }
}
