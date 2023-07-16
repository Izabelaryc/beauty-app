export const getPublicAssetUrl = (path) => {
  console.log(import.meta.env.BASE_URL);
  return `${import.meta.env.BASE_URL}${path}`;
};
