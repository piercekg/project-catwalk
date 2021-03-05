import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductInfo.module.css';
import Price from './Price';
import Stars from '../../Reviews-Jim/components/Stars';

const ProductInfo = ({
  productName, category, description, styleInfo, productRating, reviewsRef,
}) => {
  const url = 'http://localhost:3000/';
  const starsStyle = {
    display: 'inline',
  };

  const scrollToReviews = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div>
      <Stars style={starsStyle} rating={productRating} />
      <span
        onClick={() => scrollToReviews(reviewsRef)}
        onKeyUp={() => scrollToReviews(reviewsRef)}
        role="button"
        tabIndex={0}
      >
        <u>Read all reviews</u>
      </span>
      <div className={styles.category}>{category}</div>
      <h2>{productName}</h2>
      <Price styleInfo={styleInfo} />
      <div>{description}</div>
      <span>
        <a href="https://twitter.com/intent/tweet">
          <img src="twitter.png" alt="twitter" width="25" height="25" />
        </a>

        <a href="https://www.pinterest.com/pin/create/button/">
          <img src="pinterest.png" alt="pinterest" width="25" height="25" />
        </a>

        <a href={`https://facebook.com/sharer/sharer.php?u=${url}`}>
          <img src="facebook.png" alt="facebook" width="25" height="25" />
        </a>

      </span>
    </div>
  );
};

ProductInfo.propTypes = {
  productName: PropTypes.string.isRequired,
  productRating: PropTypes.string,
  category: PropTypes.string.isRequired,
  description: PropTypes.string,
  styleInfo: PropTypes.shape({
    name: PropTypes.string,
    style_id: PropTypes.number,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  reviewsRef: PropTypes.object,
};

ProductInfo.defaultProps = {
  description: null,
  productRating: null,
  styleInfo: {
    name: 'style name',
    style_id: null,
    original_price: null,
    sale_price: null,
  },
  reviewsRef: {},
};

export default ProductInfo;
