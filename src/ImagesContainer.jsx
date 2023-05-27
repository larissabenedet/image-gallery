import PropTypes from "prop-types";

export const ImagesContainer = ({ images }) => {
  console.log(images);

  if (images)
    return (
      <div>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.urls.thumb}
              alt={image.alt_description}
            />
          );
        })}
      </div>
    );
};

ImagesContainer.propTypes = {
  images: PropTypes.Array,
};
