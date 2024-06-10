import { ProductProps } from "../types";

function Product({ item }: ProductProps) {
  return (
    <div className="col-sm-6 col-lg-4 text-center item mb-4 item-v2">
      {item.is_on_sale && <span className="onsale">İNDİRİM</span>}
      <a href="shop-single.html">
        <img src={item.image} alt={item.name} />
      </a>
      <h3 className="text-dark">
        <a href="shop-single.html">{item.name}</a>
      </h3>
      <p className="price">
        {item.sale_price ? (
          <>
            <del>${item.price}</del> &mdash; ${item.sale_price}
          </>
        ) : (
          <>${item.price}</>
        )}
      </p>
    </div>
  );
}

export default Product;
