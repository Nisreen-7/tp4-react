import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButtons } = props;
  return (
    <>
      <div className="card h-100">
        <div className="ratio ratio-16x9">
          <img
            src={product.image}
            className="card-img-top img-fluid"
            alt="..."
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          {showButtons && (
            <Link className="btn btn-primary mt-auto mb-1" to={`/product/${product.id}`}>
              Dedails
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
