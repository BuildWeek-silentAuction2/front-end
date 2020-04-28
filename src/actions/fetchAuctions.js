import axiosWithAuth from "../utils/axiosWithAuth";

export const fetchAuctions = () => {
    return dispatch => {
    dispatch({type: "FETCH_AUCTIONS_START"})
    axiosWithAuth()
        .get("/api/auction")
        .then(res => {
            console.log("Fetch Auctions: ", res);
            dispatch({type: "FETCH_AUCTIONS_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_AUCTIONS_FAILURE",
                payload: `Error ${err.response}: ${err.response.data}`
            });
        });
    };
};

