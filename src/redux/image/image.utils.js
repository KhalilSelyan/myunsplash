export const addImage = (imageList, imageToAdd) => {
  return [...imageList, imageToAdd].reverse();
};

export const removeImage = ({ imageList, image }) => {
  imageList = imageList.filter((imager) => {
    return imager.label !== image.label;
  });
  return imageList;
};
