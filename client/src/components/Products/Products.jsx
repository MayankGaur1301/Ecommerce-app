import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ sectionHeading, HeadingText, products }) => {
  return (
    <div className="products-container">
      {!sectionHeading && <div className="sec-heading">{HeadingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
