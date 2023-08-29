import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/speaker-prod-3.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate-*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search product Here..."
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="close-btn"
          onClick={() => setShowSearch(false)}
          size={30}
        />
      </div>
      <div className="search-result-content ">
        <div className="search-results">
          {data?.data?.map((item) => (
              <div className="search-result-items" key={item.id} onClick={() => {navigate('/product/' + item.id); setShowSearch(false)}}>
              <div className="image-container">
                <img
                  src={
                    process.env.REACT_APP_URL +
                    item?.attributes?.img?.data[0]?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
