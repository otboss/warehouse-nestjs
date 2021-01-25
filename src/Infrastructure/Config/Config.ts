export namespace Config {

  export const getEnvironment = (): Environment => {
    const environment: Partial<Environment> = process.env;
    const env: Environment = {
      DATABASE: environment.DATABASE,
      DATABASE_HOST: environment.DATABASE_HOST,
      DATABASE_PORT: parseInt(environment.DATABASE_PORT.toString()),
      DATABASE_USERNAME: environment.DATABASE_USERNAME,
      DATABASE_PASSWORD: environment.DATABASE_PASSWORD,
    }
    return env;
  }

  interface Environment {
    DATABASE: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
  }

}