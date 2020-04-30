import axiosWithAuth from "../../utils/axiosWithAuth";

export const deleteAccount = () => {
    return dispatch => {
    dispatch({type: "DELETE_SELLER_START"})
    axiosWithAuth()
    .delete(`https://api-silent-auction.herokuapp.com/api/seller/:id`)
    .then(res => {
        console.log("Fetch Seller Succeeded: ", res.data.data);
        dispatch({type: "DELETE_SELLER_SUCCESS", payload: res.data.data})
    })
    .catch(err => {
        console.log(err)
        dispatch ({
            type: "DELETE_SELLER_FAILURE",
            payload: `Fetch Seller Failed: ${err.response}: ${err.response}`
        });
    });
    }
}