import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../Produto/entities/produto.entity";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 155, nullable: false})
    tipo: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
    
}