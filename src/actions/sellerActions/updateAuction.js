import axiosWithAuth from "../../utils/axiosWithAuth";

export const updateAuction = (id, dataSubmit) => {
    console.log("HEEEEEEEY")
    return dispatch => {
    dispatch({type: "UPDATE_AUCTION_DATA"})
    axiosWithAuth()
        .put(`/api/auction/${id}`, dataSubmit)
        .then(res => {
            console.log("Put Auction Success: ", res);
            dispatch({type: "UPDATE_AUCTION_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "UPDATE_AUCTION_FAILURE",
                payload: `Put Auction Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};