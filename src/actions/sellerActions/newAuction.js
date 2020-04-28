import axiosWithAuth from "../../utils/axiosWithAuth";

const newAuction = () => {
    return dispatch => {
    dispatch({type: "PUT_NEW_AUCTION"})
    axiosWithAuth()
        .put("",)
        .then(res => {
            console.log(res);
            dispatch({type: "PUT_AUC_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch ({
                type: "PUT_AUC_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    };
};

export default newAuction();