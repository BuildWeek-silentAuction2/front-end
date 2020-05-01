import axiosWithAuth from "../../utils/axiosWithAuth";

export const getAuctionBuyer = (id) => {
    return dispatch => {
    dispatch({type: "FETCH_AUCTION_BUYER_START"})
    axiosWithAuth()
        .get(`/api/auction/${id}`)
        .then(res => {
            console.log("Get Buyer Auction Succeeded: ", res.data.data);
            dispatch({type: "FETCH_AUCTION_BUYER_SUCCESS", payload: [res.data.data]})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTION_BUYER_FAILURE",
                payload: `Get Buyer Auction Failed: ${err.response}: ${err.response}`
            });
        });
    };
};