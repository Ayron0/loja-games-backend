import { Produto } from './../entities/produto.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>
    ){}

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
        
        }); //find vai buscar todas postagens. Tem mais metodos alem do find().
        
    }

    async findByid(id: number): Promise<Produto> {

        const produto = await this.produtoRepository.findOne({
            where: {
                id
            },
        });

        if(!produto)
            throw new HttpException('Produto não encontrada', HttpStatus.NOT_FOUND);
        return produto;

    }

    async findAllByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
           
        })
    }

    async findAllDescricao(descricao: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where:{
                descricao: ILike(`%${descricao}%`)
            }
        })
    }

    async create(produto: Produto): Promise<Produto> {
        //await this.temaService.findById(produto.tema.id)
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {
        await this.findByid(produto.id)

        //await this.temaService.findById(produto.tema.id)

        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findByid(id)
        return await this.produtoRepository.delete(id)
    }

    //CRUD do produto Finalizado

}