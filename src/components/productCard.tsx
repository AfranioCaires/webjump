import { Product } from "../services/api/interfaces/product";
import { truncateText, formatCurrency } from "../utils/utils";
import { Button } from "./ui/button";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const truncatedName = truncateText(product.name.toUpperCase(), 30);

  return (
    <article className="flex min-h-[300px] min-w-[130px] max-w-48 flex-col justify-between">
      <div>
        <img
          className="md aspect-square border object-contain p-2"
          width={215}
          height={200}
          src={`/${product.image}`}
          alt={product.name}
        />
        <h2 className="mb-6 mt-2 text-center text-base font-medium text-gray-500">
          {truncatedName}
        </h2>
        <div className="flex items-baseline justify-center gap-4">
          {product.specialPrice && (
            <p className="text-sm font-medium text-gray-400 line-through">
              {formatCurrency(product.price)}
            </p>
          )}
          <p className="mb-3 text-xl font-extrabold text-blue1">
            {formatCurrency(
              product.specialPrice ? product.specialPrice : product.price,
            )}
          </p>
        </div>
      </div>
      <Button variant="teal" shape="rounded">
        COMPRAR
      </Button>
    </article>
  );
}

export default ProductCard;
