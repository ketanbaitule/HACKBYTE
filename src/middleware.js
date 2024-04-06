import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({ returnTo: "/" });

export const config = {
  matcher: ['/dashboard/:path*', '/new/:path*']
};