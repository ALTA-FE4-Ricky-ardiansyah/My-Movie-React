import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();

        return <Component {..props} navigate={navigate}/>;
    };

    return Wrapper;
};

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();

        return <Component {..props} navigate={navigate}/>;
    };

    return Wrapper;
};


