import axiosWithAuth from "../../utils/axiosWithAuth";

export const addNewAuction = newAuction => {
    return dispatch => {
    dispatch ({type: "PUT_NEW_AUCTION"})
    axiosWithAuth()
        .post("/api/auction", newAuction)
        .then(res => {
            console.log("New Auction Succeeded: ", res);
            dispatch({type: "PUT_AUC_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_AUC_FAILURE",
                payload: `New Auction Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};
