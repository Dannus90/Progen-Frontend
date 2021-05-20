export const routeFactory = {
  appRoot: (): string => "/",
  auth: {
    login: (): string => "/login",
    register: (): string => "/register",
    resetPassword: (): string => "/reset-password/:resetToken",
    requestResetPassword: (): string => "/reset-password"
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
