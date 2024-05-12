import { auth } from '@clerk/nextjs/server';

// ids stored in .env.local file as string separated by comma and space
const adminIds = process.env.CLERK_ADMIN_IDS!.split(', ');

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.includes(userId);
};
