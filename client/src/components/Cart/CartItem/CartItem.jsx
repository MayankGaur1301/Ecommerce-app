import "./CartItem.scss";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const {
    cartItems,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity,
  } = useContext(Context);

  const handleQuantityChange = (item, quantity) => {
    handleAddToCart(item, quantity);
  };

  return (
    <div className="cart-products">
      {cartItems?.map((item) => (
        <div className="cart-product" key={item.id} onClick={() => {}}>
          <div className="image-container">
            <img
              src={
                process.env.REACT_APP_URL + item?.attributes?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdDelete
              className="close-btn"
              style={{ color: "red" }}
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                <span>₹ </span>
                {item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
