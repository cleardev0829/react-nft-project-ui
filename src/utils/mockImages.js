// ----------------------------------------------------------------------

export const mockImgCover = (index) => `/static/blog/blog_${index % 4}.png`;
export const mockImgFeed = (index) =>
  index === 0
    ? `/static/nft/net-00${index}.gif`
    : `/static/nft/net-00${index}.png`;
export const mockImgProduct = (index) => `/static/blog/blog_${index % 4}.png`;
export const mockImgAvatar = (index) => `/static/blog/blog_${index % 4}.png`;
