import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await fetchDataFromApi(
          "/api/categories?populate=*"
        );
        const productData = await fetchDataFromApi("/api/products?populate=*");
        console.log(categoryData);
        console.log(productData);
        setCategories(categoryData);
        setProducts(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products HeadingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
