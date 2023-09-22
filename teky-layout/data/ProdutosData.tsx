import { ProdutosInfo } from "../types/ProdutosInfo";

const ProdutosData: ProdutosInfo[] = [
    {id: 1, nome: 'Tubo PVC 22mm x 3M', fabricante: 'Amanco', precoVenda: 39.55, 
    precoOriginal: 46.53, imagemUrl: './produtos/tubopvc.jpg', estoque: true },
    
    {id: 2, nome: 'Adesivo Frasco para Tubos e conexões', fabricante: 'Amanco', 
    precoVenda: 63.63, precoOriginal: 74.86, imagemUrl: './produtos/adesivofrasco.jpg', estoque: true },

    {id: 3, nome: 'Disjuntor Termomagnético', fabricante: 'Steck', 
    precoVenda: 9.22, precoOriginal: 10.85, imagemUrl: './produtos/disjuntor.jpg', estoque: true },

    {id: 4, nome: 'Fita PVC Isolante', fabricante: '3m', 
    precoVenda: 6.59, precoOriginal: 7.75, imagemUrl: './produtos/fitaisolante.jpg', estoque: true },

    {id: 5, nome: 'Cabo Cofre Flexível', fabricante: 'Corfio', 
    precoVenda: 1.76, precoOriginal: 2.07, imagemUrl: './produtos/cabocofre.jpg', estoque: true },

    {id: 6, nome: 'Conduíte Corrugado', fabricante: 'Amanco', 
    precoVenda: 2.05, precoOriginal: 2.41, imagemUrl: './produtos/conduite.jpg', estoque: true },

    {id: 7, nome: 'Módulo Interruptor Simples Branco', fabricante: 'Tramontina', 
    precoVenda: 5.16, precoOriginal: 6.07, imagemUrl: './produtos/interruptor.jpg', estoque: true },

    {id: 8, nome: 'Módulo tomada 2P+T', fabricante: 'Tramontina', 
    precoVenda: 5.74, precoOriginal: 6.75, imagemUrl: './produtos/tomada.jpg', estoque: false }
]

export default ProdutosData;