import React, { Component } from "react";
import Courses from './courseAvailable';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }
    componentDidMount(){
        fetch("http://localhost:4000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => res.json())
        .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        });
    }
    render(){
        return (
            <div>
                <hr/>
                Phone No.<h1>{this.state.userData.mobile}</h1>
                <hr/>
                <Courses/>
            </div>
        );
    }
}