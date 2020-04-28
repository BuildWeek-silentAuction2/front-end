import axiosWithAuth from "../../utils/axiosWithAuth";

const newItem = () => {
    return dispatch => {
    dispatch({type: "PUT_NEW_ITEM"})
    axiosWithAuth()
        .put("",)
        .then(res => {
            console.log(res);
            dispatch({type: "PUT_ITEM_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_ITEM_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};

export default newItem();