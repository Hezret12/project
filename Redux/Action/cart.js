export const addProduct = (dispatch, item) => {
    dispatch({
        type : "ADD_PRODUCT",
        payload : item
    })
}