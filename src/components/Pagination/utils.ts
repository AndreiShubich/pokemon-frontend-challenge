export const getNextPageNumber = (pageNumber: number | null, numberOfPages: number) => {
  if (!pageNumber || pageNumber + 1 > numberOfPages) {
    return null;
  }
  return pageNumber + 1;
};

export const getPrevPageNumber = (pageNumber: number | null) => {
  if (!pageNumber || pageNumber - 1 <= 0) {
    return null;
  }
  return pageNumber - 1;
};

export const getCurrentPageNumber = (offset: number, limit: number) => {
  if (offset === 0) {
    return 1;
  }
  return (offset / limit) + 1;
};

export const getNumberOfPages = (count: number, limit:number) => Math.ceil(count / limit);
