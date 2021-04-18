export const routeFactory = {
  appRoot: (): string => "/",
  auth: {
    login: (): string => "/login",
    register: (): string => "/register",
    forgotPassword: (): string => "/reset-password"
  },
  home: {
    main: (): string => "/home"
  },
  yourTeam: {
    main: (): string => "/your-team"
  }
};
