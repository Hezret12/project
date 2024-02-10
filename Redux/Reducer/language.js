const initialState = {
    language : localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : 'Tm'
}

const state = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case "CHANGE_LANGUAGE" : {
            
            return {
                ...state,
                lang : payload
            }
        }
    }
}