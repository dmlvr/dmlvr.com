import { DIRECTUS_API_URL } from "@/const";
import { Props } from "./types";
import { useState } from "react";

export default function usePostGallery({ gallery }: Props) {
  const [indexImage, setIndexImage] = useState<number>(0);
  const [isShowLightbox, setIsShowLightbox] = useState(false);
  const images = gallery.map((el) => ({
    src: `${DIRECTUS_API_URL}/assets/${el.directus_files_id.id}/image.png`,
    width: el.directus_files_id.width,
    height: el.directus_files_id.height,
  }));

  const handleClick = (index: number) => {
    setIsShowLightbox(true);
    setIndexImage(index);
  };

  const currentImage = indexImage ? images[indexImage].src : images[0].src;
  const nextIndex = (indexImage + 1) % images.length;
  const prevIndex = (indexImage + images.length - 1) % images.length;
  const nextImage = images[nextIndex].src || currentImage;
  const prevImage = images[prevIndex].src || currentImage;

  const handleClose = () => setIsShowLightbox(false);

  const handleMovePrev = () => {
    setIndexImage(prevIndex);
  };
  const handleMoveNext = () => {
    setIndexImage(nextIndex);
  };

  return {
    images,
    handleClick,
    handleClose,
    currentImage,
    nextImage,
    prevImage,
    handleMovePrev,
    handleMoveNext,
    isShowLightbox,
  };
}
