import axiosWithAuth from "../../utils/axiosWithAuth";

export const updateAccount = (id, newAccountData) => {
    return dispatch => {
    dispatch({type: "PUT_NEW_DATA"})
    axiosWithAuth()
        .put(`/api/seller/${id}`, newAccountData)
        .then(res => {
            console.log("Put Account Success: ", res);
            dispatch({type: "PUT_DATA_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_DATA_FAILURE",
                payload: `Put Account Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};