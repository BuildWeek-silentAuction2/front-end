import React, {useEffect} from "react";
import {connect} from "react-redux";
import Loader from "react-loader-spinner";

const NewAuction = props => {
    useEffect(() => {
        props.newAuction();
    }, [])
}