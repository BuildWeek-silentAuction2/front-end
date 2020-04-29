import axiosWithAuth from "../../utils/axiosWithAuth";

 export const newListing = () => {
    return dispatch => {
    dispatch({type: "PUT_NEW_ITEM"})
    axiosWithAuth()
        .post("/api/listing")
        .then(res => {
            console.log("Post Listing Success: ", res);
            dispatch({type: "PUT_ITEM_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_ITEM_FAILURE",
                payload: `Post Listing Failed: ${err.response.status}: ${err.response.data}`
            });
        });
    };
};
