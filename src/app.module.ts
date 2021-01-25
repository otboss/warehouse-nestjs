import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Config } from './Infrastructure/Config/Config';
import { WarehouseServiceImpl } from './Infrastructure/Persistence/Services/WarehouseServiceImpl';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/Web/schema.gql'),
      sortSchema: true,
    }),
    ConfigModule.forRoot({
      envFilePath: 'dev.env',
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: Config.getEnvironment().DATABASE_HOST,
      port: Config.getEnvironment().DATABASE_PORT,
      username: Config.getEnvironment().DATABASE_USERNAME,
      password: Config.getEnvironment().DATABASE_PASSWORD,
      database: Config.getEnvironment().DATABASE,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WarehouseServiceImpl],
})
export class AppModule { }
