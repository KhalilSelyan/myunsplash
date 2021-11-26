export const addImage = (imageList, imageToAdd) => {
  return [...imageList, imageToAdd].reverse();
};

export const removeImage = (imageList, imageToRemove) => {
  const existingImage = imageList.find(
    (image) => image.url === imageToRemove.url
  );

  if (existingImage) {
    return imageList.filter((image) => image.url !== imageToRemove.url);
  }
};
