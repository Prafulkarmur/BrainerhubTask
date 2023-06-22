const initialState = {
    products: [],
    quantity: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const productId = action.payload.data.id;
            const isProductExist = state.products.some(product => product.data.id === productId);

            if (isProductExist) {
                return state; // If the product with the same ID already exists, return the current state
            } else {
                return {
                    ...state,
                    products: [...state.products, action.payload],
                    quantity: state.quantity + 1
                };
            }
        case 'REMOVE_PRODUCET':
            const id = action.payload;
            const updatedProducts = state.products.filter(product => product.data.id !== id);

            return {
                ...state,
                products: updatedProducts,
                quantity: state.quantity - 1
            };
        default:
            return state;
    }
};

export default cartReducer;
