import axiosWithAuth from "../../utils/axiosWithAuth";

export const getSeller = (id) => {
    return dispatch => {
    dispatch({type: "FETCH_SELLER_START"})
    axiosWithAuth()
        .get(`/api/seller/${id}`)
        .then(res => {
            console.log("Fetch Seller Succeeded: ", res.data.data);
            dispatch({type: "FETCH_SELLER_SUCCESS", payload: res.data.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "FETCH_SELLER_FAILURE",
                payload: `Fetch Seller Failed: ${err.response}: ${err.response}`
            });
        });
    };
};