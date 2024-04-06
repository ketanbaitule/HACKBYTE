import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    signup: handleLogin({authorizationParams: { screen_hint: 'signup' }}),
    login: handleLogin({returnTo: "/dashboard"}),
    logout: handleLogout({returnTo: "/"})
});