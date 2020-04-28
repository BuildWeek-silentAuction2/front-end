import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchAuctions = () => {
    return dispatch => {
    dispatch({type: "FETCH_AUCTIONS_START"})
    axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res);
            dispatch({type: "FETCH_AUCTIONS_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTIONS_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};

