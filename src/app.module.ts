import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './Produto/entities/produto.entity';
import { ProdutoModule } from './Produto/produto.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { Categoria } from './Categoria/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_logagames',
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
