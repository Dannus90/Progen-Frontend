export const routeFactory = {
  appRoot: (): string => "/",
  auth: {
    login: (): string => "/login",
    register: (): string => "/register",
    forgotPassword: (): string => "/reset-password/:resetToken"
  },
  home: {
    main: (): string => "/home"
  },
  yourTeam: {
    main: (): string => "/your-team"
  },
  support: {
    main: (): string => "/support"
  },
  cvPrintSv: {
    main: (): string => "/cv-print-sv"
  },
  cvPrintEn: {
    main: (): string => "/cv-print-en"
  }
};
