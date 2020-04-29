import axiosWithAuth from "../../utils/axiosWithAuth";

export const getAuction = (id) => async dispatch => {
    dispatch({type: "FETCH_AUCTION_ID_START"})
    axiosWithAuth()
        .get(`/api/auction/${id}`)
        .then(res => {
            console.log("New Auction Succeeded: ", res);
            dispatch({type: "FETCH_AUCTION_ID_SUCCESS", payload: res})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTION_ID_FAILURE",
                payload: `New Auction Failed: ${err.response.status}: ${err.response}`
            });
        });
    };

//${id}