import 'dotenv/config'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Emprendedor } from './emprendedores/entities/emprendedore.entity.js'
import { EmprendedoresModule } from './emprendedores/emprendedores.module.js'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT ?? 3306),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'emprendedores_db',
      entities: [Emprendedor],
      synchronize: true // SOLO en desarrollo
    }),
    EmprendedoresModule
  ]
})
export class AppModule {}