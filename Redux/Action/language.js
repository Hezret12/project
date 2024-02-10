export const changeLanguage = (dispatch, language) => {
    dispatch({
        type : "CHANGE_LANGUAGE",
        payload : language
    })
}