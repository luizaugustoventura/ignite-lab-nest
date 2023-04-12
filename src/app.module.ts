import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { MessagingModule } from '@infra/messaging/messasing.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    DatabaseModule,
    MessagingModule,
  ],
})
export class AppModule {}
