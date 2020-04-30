import axiosWithAuth from "../../utils/axiosWithAuth";

export const updateAuction = (dataSubmit) => {
    return dispatch => {
    dispatch({type: "NEW_AUCTION_DATA"})
    axiosWithAuth()
        .put("/api/auction", dataSubmit)
        .then(res => {
            console.log("Put Account Success: ", res);
            dispatch({type: "NEW_AUCTION_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "NEW_AUCTION_FAILURE",
                payload: `Put Account Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};