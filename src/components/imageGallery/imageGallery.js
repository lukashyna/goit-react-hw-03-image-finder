import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./../imageGalleryItem/imageGalleryItem";
// import Modal from "./components/modal/modal";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ articles, onGetLargeImageURL, onOpen }) => (
  <div>
    <ul className={styles.imageGallery}>
      {articles.map((article) => (
        <li
          key={article.id}
          onClick={onGetLargeImageURL}
          className={styles.imageGalleryItem}
        >
          <ImageGalleryItem article={article} />
        </li>
      ))}
    </ul>
    {/* {isModalOpen && (
      <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
    )} */}
  </div>
);
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  getLargeImageURL: PropTypes.func,
};
export default ImageGallery;
