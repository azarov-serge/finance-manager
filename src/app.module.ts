import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './common/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
	imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, CategoryModule, TransactionModule],
})
export class AppModule {}
