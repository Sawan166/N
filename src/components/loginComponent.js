import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      mobile: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const{mobile, password} = this.state;
    console.log(mobile, password);
    fetch("http://localhost:4000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        mobile,
        password,
      }),
    }).then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status==="ok"){ 
        window.localStorage.setItem("token", data.data);
        window.location.href = "./userDetails";
      }
    });
  }

  render() {
    return (
      <div className="p-5" 
           style={{ 
              backgroundImage: "url(https://chronicle.brightspotcdn.com/dims4/default/727ef27/2147483647/strip/true/crop/5194x3463+0+308/resize/840x560!/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.amazonaws.com%2Fc6%2F9d%2Fb4c22f114c41a5ef472fdbcbe695%2Fmiller-march17-gettyimages-1166469673.jpg)",
              height: "90%"
              }}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                onChange={(e)=>this.setState({mobile: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                onChange={(e)=>this.setState({password: e.target.value})}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

            <p className="forgot-password text-right">
              Forgot <a href="/">password?</a>
            </p>
            </form>
          </div>    
        </div>
      </div>
      
      
    )
  }
}