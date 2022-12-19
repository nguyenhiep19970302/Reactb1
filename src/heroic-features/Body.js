import React, { Component } from "react";
import Content from "./Content";
import Features from "./Features";
class Body extends Component {
    render() {
        return (
            <>
                <Content />
                <Features />
            </>
        )
    }
}

export default Body;