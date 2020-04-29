import axiosWithAuth from "../../utils/axiosWithAuth";

export const getAuction = () => {
    return dispatch => {
    dispatch({type: "FETCH_AUCTION_ID_START"})
    axiosWithAuth()
        .get(`/api/auction/:id`)
        .then(res => {
            console.log("New Auction Succeeded: ", res);
            dispatch({type: "FETCH_AUCTION_ID_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTION_ID_FAILURE",
                payload: `New Auction Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};

//${id}