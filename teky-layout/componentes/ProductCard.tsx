interface ProductCardProps {
  id: number;
  nome?: string;
  imagemUrl: string;
}

function ProductCard({nome, imagemUrl }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imagemUrl} alt={nome} />
    </div>
  );
}

export default ProductCard;
