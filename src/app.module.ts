import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/users/user.module';
import { ShareModule } from './app/_share/share.module';

@Module({
  imports: [UserModule, ShareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
