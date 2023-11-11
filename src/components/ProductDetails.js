import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const params = useParams();
  console.log(params);

  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div className="container ">
      <div className="row h-25">
        <Product product={product} showButtons={false} />
      </div>
    </div>
  );
}
export default ProductDetails;
