
const initialState = {
    // cartPoducts: JSON.parse(localStorage.getItem("cartProducts") || '[]'),
    total:0,
    sum:0,
    cartPoducts:[]
}

      

   
const Cart = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case "ADD_PRODUCT" : {
            console.log(payload)
            // const cart = JSON.parse(localStorage.getItem("cartProducts"))

            
            // localStorage.setItem("cartProducts",JSON.stringify([...cart, payload]))
            return{
                ...state,
                cartPoducts: [...state.cartPoducts, payload],
                total: state.total + 1,
                sum: state.sum + payload.price
            }
        }
            
        default : return state;
        
    }
}

export default Cart;