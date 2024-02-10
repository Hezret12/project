const initialState = {
    products : [
        {
            id:1,
            price:2520,
            info:"ОП для ПК Lexar ARES 32 ГБ DDR5-5200 МГц LD5CU016G-R5200GD2A"
        },
        {
            id:2,
            price:1155,
            info:"ОП для ПК Lexar ARES 16 ГБ DDR5-4800 МГц LD5DU016G-R4800GS2A"
        },
        {
            id:3,
            price:945,
            info:"Процессор Intel® Core™ i5-6500"
        },
        {
            id:4,
            price:4935,
            info:"Монитор Xiaomi Redmi 30'' Curved"
        },
        {
            id:5,
            price:2457,
            info:"Жесткий диск для ПК WD Black 6 TБ 3.5 WD6003FZBX"
        },  
         {
            id:6,
            price:945,
            info:"Процессор Intel® Core™ i5-6500"
        },
        {
            id:7,
            price:4935,
            info:"Монитор Xiaomi Redmi 30'' Curved"
        },
        {
            id:8,
            price:2457,
            info:"Жесткий диск для ПК WD Black 6 TБ 3.5 WD6003FZBX"
        }
    
    ]
}
const products = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        // case "ADD_PRODUCT" : {
            
        //     return {
        //         ...state,
                
        //     }
        // }

        default : return state
    }
}

export default products



