import React from "react";
import { Props } from "./types";
import { Gallery } from "react-grid-gallery";
import usePostGallery from "./PostGalery.controller";
import styles from "./PostGallery.module.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function PostGallery(props: Props) {
  const {
    images,
    handleClick,
    isShowLightbox,
    handleClose,
    currentImage,
    nextImage,
    prevImage,
    handleMovePrev,
    handleMoveNext,
  } = usePostGallery(props);

  return (
    <div className={styles["wrapper"]}>
      <h2>Галерея фото:</h2>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
      />
      {isShowLightbox && (
        <Lightbox
          mainSrc={currentImage}
          mainSrcThumbnail={currentImage}
          nextSrc={nextImage}
          nextSrcThumbnail={nextImage}
          prevSrc={prevImage}
          prevSrcThumbnail={prevImage}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}

export default PostGallery;
