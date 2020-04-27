import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

// import {axiosWithAuth} from "../utils/axiosWithAuth";

// const auctionState = {
//     auction_id: "",
//     name: "",
//     start_time: "",
//     end_time: "",
//     anonymous_bidders: false
// }

const CurrentAuctions = props => {
    useEffect(() => {
        props.fetchAuctions();
    }, [])

    return (
        <div className="auction-list">
            <h2>Current Running Auctions:</h2>
            {props.isFetching && (
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            //timeout={3000} //optional end
            />
            )}
            {props.error && <p className="error">{props.error}</p>}
            {props.data && props.data.map(item => (
                <div className="auction-card">
                    <h4>{item.name}</h4>
                    <p>{item.start_time}</p>
                    <p>{item.end_time}</p>
                    <p>Anonymous Bidding: {item.anonymous_bidders}</p>
                </div>
            ))}
            <button>Add New</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log("State to Props: ", state);
    return {
        // data: ,
        // isFetching: ,
        // error: 
    };
};

export default connect(mapStateToProps, {fetchAuctions}(CurrentAuctions);