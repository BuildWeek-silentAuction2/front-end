import axiosWithAuth from "../../utils/axiosWithAuth";

export const newItem = () => {
    return dispatch => {
    dispatchEvent({type: "PUT_NEW_BID"})
    axiosWithAuth()
        .put("",)
        .then(res => {
            console.log(res);
            dispatchEvent({type: "PUT_BID_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_BID_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};