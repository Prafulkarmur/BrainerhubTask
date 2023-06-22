export const addProduct = (data) => ({
    type: 'ADD_PRODUCT',
    payload: data,
  });

  export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCET',
    payload: id,
  });