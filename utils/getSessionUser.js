import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions';

export const getSessionUser = async () => {
  // create session
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  // return user and userid
  return {
    user: session.user,
    userId: session.user.id,
  };
};
