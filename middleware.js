// Protects all routes
export { default } from 'next-auth/middleware';

// Secure certain pages
export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
