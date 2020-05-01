import axiosWithAuth from "../../utils/axiosWithAuth";

export const updateAccountBuyer = (buyerId, newAccountData) => {
    return dispatch => {
    dispatch({type: "PUT_BUYER_DATA"})
    axiosWithAuth()
        .put(`/api/buyer/${buyerId}`, newAccountData)
        .then(res => {
            console.log("Put Account Success: ", res);
            dispatch({type: "PUT_BUYER_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_BUYER_FAILURE",
                payload: `Put Account Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};