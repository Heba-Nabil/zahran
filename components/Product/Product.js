// Main Imports
import { useState } from "react";
// Components
import Offer from "./Offer/Offer";
import Favorite from "./Favorite/Favorite";
// Styles
import styles from "./Product.module.css";
import Link from "next/link";
import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import InputNumber from "../InputNumber/InputNumber";
// Redux
import { useDispatch } from "react-redux";
import {
  addToCart as add,
  handleIncrement as IncreaseQuantity,
  handleDecrement as decreaseQuantity,
  deleteFromCart,
} from "../../redux/slices/cartSlice";

const Product = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const { discount, images = [], title, description, defaultPrice } = product;

  const [addToFav, setAddToFav] = useState(false);
  const [toggleImage, setToggleImage] = useState(false);

  const handleAddToFav = () => {
    setAddToFav((prev) => !prev);
  };

  const handleAddToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    dispatch(add(newProduct));
  };

  const handleIncrement = (product) => {
    dispatch(IncreaseQuantity(product));
  };

  const handleDecrement = (product) => {
    if (quantity <= 1) {
      dispatch(deleteFromCart(product));
    } else {
      dispatch(decreaseQuantity(product));
    }
  };

  const imageCheck = (images) => {
    if (images?.length >= 2) {
      return (
        <a
          onMouseEnter={() => setToggleImage((prev) => !prev)}
          onMouseLeave={() => setToggleImage((prev) => !prev)}
          className={styles.image}
        >
          <Image
            src={toggleImage ? images[0]?.imgURL : images[1]?.imgURL}
            alt={title}
            width={190}
            height={190}
            placeholder="blur"
            blurDataURL={toggleImage ? images[0]?.imgURL : images[1]?.imgURL}
          />
        </a>
      );
    }
    return (
      <a className={styles.image}>
        <Image
          src={images[0]?.imgURL}
          alt={title}
          width={190}
          height={190}
          placeholder="blur"
          blurDataURL={images[0]?.imgURL}
        />
      </a>
    );
  };

  return (
    <div className={styles.product}>
      {/* Discount */}
      <Offer discount={discount} text={discount && "off"} />
      {/* Favorite */}
      <Favorite addToFav={addToFav} handleAddToFav={handleAddToFav} />
      {/* Images */}
      <Link href="/">{imageCheck(images)}</Link>
      {/* Body */}
      <div className="p-2">
        <Link href="/" passHref>
          <h3>{title}</h3>
        </Link>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>
          <span>
            {(defaultPrice * (1 - parseInt(discount) / 100)).toFixed(2)} EGP
          </span>
          {discount && <del>{defaultPrice} EGP</del>}
        </p>
      </div>
      <div className={styles.options}>
        {quantity >= 1 ? (
          <InputNumber
            handleIncrement={() => handleIncrement(product)}
            handleDecrement={() => handleDecrement(product)}
            quantity={quantity}
          />
        ) : (
          <MainButton
            text="add to cart"
            classes="w-100"
            onClick={() => handleAddToCart(product)}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
