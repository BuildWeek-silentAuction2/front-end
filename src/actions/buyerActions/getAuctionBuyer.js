import axiosWithAuth from "../../utils/axiosWithAuth";

export const getAuctionBuyer = (id) => {
    return dispatch => {
    dispatch({type: "FETCH_AUCTION_ID_START"})
    axiosWithAuth()
        .get(`/api/auction/${id}`)
        .then(res => {
            console.log("New Auction Succeeded: ", res.data.data);
            dispatch({type: "FETCH_AUCTION_ID_SUCCESS", payload: [res.data.data]})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTION_ID_FAILURE",
                payload: `New Auction Failed: ${err.response}: ${err.response}`
            });
        });
    };
};