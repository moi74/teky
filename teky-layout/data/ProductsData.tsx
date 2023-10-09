import { ProductsInfo } from "../types/ProductsInfo";

const ProductsData: ProductsInfo[] = [
    {id: 1, name: 'Tubo PVC 22mm x 3M', brand: 'Amanco', price: 39.55, 
    originalPrice: 46.53, imagemUrl: './produtos/tubopvc.jpg', available: true },
    
    {id: 2, name: 'Adesivo Frasco para Tubos e conexões', brand: 'Amanco', 
    price: 63.63, originalPrice: 74.86, imagemUrl: './produtos/adesivofrasco.jpg', available: true },

    {id: 3, name: 'Disjuntor Termomagnético', brand: 'Steck', 
    price: 9.22, originalPrice: 10.85, imagemUrl: './produtos/disjuntor.jpg', available: true },

    {id: 4, name: 'Fita PVC Isolante', brand: '3m', 
    price: 6.59, originalPrice: 7.75, imagemUrl: './produtos/fitaisolante.jpg', available: true },

    {id: 5, name: 'Cabo Cofre Flexível', brand: 'Corfio', 
    price: 1.76, originalPrice: 2.07, imagemUrl: './produtos/cabocofre.jpg', available: true },

    {id: 6, name: 'Conduíte Corrugado', brand: 'Amanco', 
    price: 2.05, originalPrice: 2.41, imagemUrl: './produtos/conduite.jpg', available: true },

    {id: 7, name: 'Módulo Interruptor Simples Branco', brand: 'Tramontina', 
    price: 5.16, originalPrice: 6.07, imagemUrl: './produtos/interruptor.jpg', available: true },

    {id: 8, name: 'Módulo tomada 2P+T', brand: 'Tramontina', 
    price: 5.74, originalPrice: 6.75, imagemUrl: './produtos/tomada.jpg', available: false }
]

export default ProductsData;