import axiosWithAuth from "../../utils/axiosWithAuth";

export const newBid = () => {
    return dispatch => {
    dispatch({type: "PUT_NEW_BID"})
    axiosWithAuth()
        .post("/api/bid",)
        .then(res => {
            console.log("Post Bid Succeeded: ", res);
            dispatch({type: "PUT_BID_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_BID_FAILURE",
                payload: `Post Bid Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};