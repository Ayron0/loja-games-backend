import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Categoria } from "../../Categoria/entities/categoria.entity";

@Entity({name: "tb_produtos"})
export class Produto{
    @PrimaryGeneratedColumn()
    id: number //id PRIMARY KEY AUTO_INCREMENT
    
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string //titulo VARCHAR (100) NOT NULL

    @IsNotEmpty()
    @Column({length: 500, nullable: false})
    descricao: string //titulo VARCHAR (500) NOT NULL

    @IsNotEmpty()
    @Column({length:100, nullable: false})
    console: string //titulo VARCHAR (100) NOT NULL

    @IsNotEmpty()
    @Column({ type: 'int', nullable: false })
    quantidade: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}