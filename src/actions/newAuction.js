import axiosWithAuth from "../utils/axiosWithAuth";

export const newAuctions = () => {
    return dispatch => {
    dispatchEvent({type: "PUT_NEW_AUCTION"})
    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatchEvent({type: "PUT_AUC_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_AUC_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};