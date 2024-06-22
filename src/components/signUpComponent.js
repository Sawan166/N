import React, { Component } from 'react';
import app from "./firebaseConfig";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import AddMore from './addMore';

const auth = getAuth(app);
export default class SignUp extends Component {
  constructor(props){
    super (props);
    this.state={
      ageRange: "",
      age: "",
      mobile: "",
      password: "",
      gender: "",
      hobby: "",
      education: "",
      language: "",
      child: false,
      young: false,
      adult: false,
      senior: true,
      verifyOtp: false,
      verifyButton: false,
      otp: "",
      verified: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCaptchVerify = this.onCaptchVerify.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
    this.changeMobile = this.changeMobile.bind(this);
    this.checkAge = this.checkAge.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("Entered Submit function")
    // eslint-disable-next-line
    if (this.state.ageRange == 1){
      if (this.state.verified){
        const {ageRange, age, mobile, password, gender, hobby} = this.state;
        fetch("http://localhost:4000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            ageRange,
            age,
            mobile,
            password,
            gender,
            hobby,
          }),
        }).then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status==="ok"){
            alert("Account Created");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./sign-in";
          }else{
            alert("User Already Exists");
          }
        })
      }else {
        alert("Please Verify Mobile");
      }
    }
    // eslint-disable-next-line
    else if (this.state.ageRange == 2){
      if (this.state.verified){
        const {ageRange, age, mobile, password, education, language, hobby} = this.state;
        fetch("http://localhost:4000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            ageRange,
            age,
            mobile,
            password,
            education,
            language,
            hobby,
          }),
        }).then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status==="ok"){
            alert("Account Created");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./sign-in";
          }else{
            alert("User Already Exists");
          }
        })
      }else {
        alert("Please Verify Mobile");
      }
    }
     else {
      alert("Something Went Wrong");
    }
  }

  onCaptchVerify(e){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        this.onSignInSubmit();
      },
    }, auth);
    
  }

  onSignInSubmit(e){
    this.onCaptchVerify();
    const phoneNumber = "+91" + this.state.mobile;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("OTP Sended");
          this.setState({ verifyOtp: true });
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
        });
  }

  verifyCode(e){
    window.confirmationResult.confirm(this.state.otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      alert("Verification Successfull")
      this.setState({
        verified: true,
        verifyOtp: false,
      })
      // ...
    }).catch((error) => {
      alert("Invalid OTP")
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  changeMobile(e){
    this.setState({mobile: e.target.value}, function(){
      if(this.state.mobile.length === 10 ){
        this.setState({ verifyButton: true, });
      }
    });
  }

  checkAge(e){
    this.setState({ageRange: e.target.value}, function(){
      // eslint-disable-next-line
      if(this.state.ageRange == 1){
        this.setState({ child: true, });
        this.setState({ young: false, });
        this.setState({ adult: false, });
        this.setState({ senior: false,});
      }// eslint-disable-next-line 
      else if(this.state.ageRange == 2){
        this.setState({ child: false, });
        this.setState({ young: true, });
        this.setState({ adult: false, });
        this.setState({ senior: false,});
      }// eslint-disable-next-line 
      else if (this.state.ageRange == 3){
        this.setState({ child: false, });
        this.setState({ young: false, });
        this.setState({ adult: true, });
        this.setState({ senior: false,});
      }// eslint-disable-next-line 
      else if (this.state.ageRange == 4){
        this.setState({ child: false, });
        this.setState({ young: false, });
        this.setState({ adult: false, });
        this.setState({ senior: true,});
      }
    })
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <br/>
        {/* AGE */}
        <div className="container">
          <h1>Drag Your Age Group</h1>
          <div className="container m-1 ps-5 pe-5">
            <input 
              type="range" 
              id="customRange2" 
              className="form-range" 
              min="1" 
              max="4"
              onChange={(e)=>this.checkAge(e)}
            />
          </div>
          <div className="row align-items-start">
            <div className="col">(0-12)</div>
            <div className="col">(13-19)</div>
            <div className="col">(20-45)</div>
            <div className="col">(45+)</div>
          </div>
          <br/><br/>

          <div className="card mb-3" >
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src="https://media.istockphoto.com/id/1171408081/vector/kid-with-question-mark-curious-vector.jpg?s=612x612&w=0&k=20&c=wqdHIxUTIAcmE5R8VlstgoGEttrpHAtX32mTf5lcthQ=" class="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body border m-2 p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
                  <h5 className="card-title"><h3>Enter Your Age</h3></h5>
                  <input 
                      type="number" 
                      placeholder="Enter your age"
                      onChange={(e)=>this.setState({age: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
        <hr/>

        {/* Mobile Number Verification */}
        <div className="p-5" 
          style={{ backgroundImage: "url(https://chronicle.brightspotcdn.com/dims4/default/727ef27/2147483647/strip/true/crop/5194x3463+0+308/resize/840x560!/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.amazonaws.com%2Fc6%2F9d%2Fb4c22f114c41a5ef472fdbcbe695%2Fmiller-march17-gettyimages-1166469673.jpg)",}}>
          <div className="auth-wrapper">
            <div className="auth-inner" id="BOX">
              <form>
              <div id="recaptcha-container"></div>
              <div className="mb-3">
                <label>Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  onChange={(e)=>this.changeMobile(e)}
                />
                {this.state.verifyButton ?
                <input 
                  type="button"
                  value={this.state.verified ? "Verified" : "Verify"}
                  onClick={this.onSignInSubmit}
                  style={{
                    backgroundColor:"#0163d2",
                    width:"100%",
                    padding:"8",
                    color:"white", 
                    border:"none",
                    borderRadius: "50% 0%",
                    }}
                  /> 
                  : null}
              </div>

              {this.state.verifyOtp?
              <div className="mb-3">
                <label>OTP</label>
                <input
                  type="number" min="000000" max="999999"
                  className="form-control"
                  placeholder="Enter OTP"
                  onChange={(e)=>this.setState({otp: e.target.value})}
                />
                  
                <input 
                  type="button"
                  value="verify"
                  onClick={this.verifyCode}
                  style={{
                    backgroundColor:"#0163d2",
                    width:"100%",
                    padding:"8",
                    color:"white", 
                    border:"none",
                    borderRadius: "50% 0%",
                    }}
                  />
              </div>:null}

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  onChange={(e)=>this.setState({password: e.target.value})}
                />
              </div>

              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
              </form>
            </div>
          </div>
        </div>
        <hr/>

        {/* Child Component*/}
        {this.state.child ? <div>
          
          {/* GENDER */}
          <div className="container text-center">
            <div className="row g-2">
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>Boy</h2></div>
              </div>
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>Girl</h2></div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="Boy" onChange={(e)=>this.setState({gender: e.target.value})}/>
                    <div class="optionImg">
                      <img id="signUpImages" src="https://img.freepik.com/premium-vector/cartoon-boy-holding-human-paper-cutout_29190-7187.jpg?w=360" class="img-fluid" alt="Boy"/>
                    </div>
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="Girl" onChange={(e)=>this.setState({gender: e.target.value})}/>
                    <div class="optionImg">
                    <img id="signUpImages" src="https://img.freepik.com/free-vector/cute-girl-smiling-white-background_1308-42895.jpg?w=2000" class="img-fluid" alt="Girl"/>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr/>

          {/* Hobbies */}
          <div className="container">
            <h1>Hobbies</h1>
            <div className="row row-cols-2 row-cols-lg-4 g-4 align-items-center">
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Drawing" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://de-cavern.co.nz/wp-content/uploads/2020/05/depositphotos_11503956-stock-illustration-kid-drawing-with-pencil.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Drawing</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Reading" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://st.depositphotos.com/1967477/2312/v/950/depositphotos_23124766-stock-illustration-children-reading-a-book.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Reading Book</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Playing" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://img.freepik.com/premium-vector/cartoon-little-boy-playing-football_353337-419.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Playing</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                <label class="optionBox">
                    <input type="checkbox" name="hobby" value="SingingAndDancing" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://img.freepik.com/free-vector/boy-singing-dancing_1308-107244.jpg?w=2000" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Singing & Dancing</h5>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>:null}

        {/* Young Component */}
        {this.state.young ? <div>
        
          {/* Education */}
          <div className="container text-center">
            <div className="row g-2">
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>Educated</h2></div>
              </div>
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>UnEducated</h2></div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="Educated" onChange={(e)=>this.setState({education: e.target.value})}/>
                    <div class="optionImg">
                    <img id="signUpImages" src="https://st4.depositphotos.com/4881653/25636/v/1600/depositphotos_256368958-stock-illustration-student-or-schoolboy-studying-at.jpg" class="img-fluid" alt="Boy"/>
                    </div>
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="UnEducated" onChange={(e)=>this.setState({education: e.target.value})}/>
                    <div class="optionImg">
                      <img id="signUpImages" src="https://thumbs.dreamstime.com/z/child-suffering-dyslexia-having-difficulty-reading-book-stressed-little-boy-doing-hard-homework-desk-disorder-223355452.jpg" class="img-fluid" alt="Girl"/>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr/>

          {/* Language */}
          <div className="container">
            <h1>Language</h1>
            <div className="row row-cols-2 row-cols-lg-4 g-4 align-items-center">
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="language" value="English" onChange={(e)=>this.setState({language: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://as2.ftcdn.net/v2/jpg/00/97/03/27/1000_F_97032716_QAs2iKnkWT3v9noHto8oMcbasOkvUACl.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">English</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="language" value="Dutch" onChange={(e)=>this.setState({language: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://logos.flamingtext.com/City-Logos/Logo-Design-Dutch.png" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Dutch</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="language" value="French" onChange={(e)=>this.setState({language: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://www.shutterstock.com/image-vector/french-language-colorful-typography-text-260nw-1867150849.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">French</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                <label class="optionBox">
                    <input type="checkbox" name="language" value="Italian" onChange={(e)=>this.setState({language: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://thumbs.dreamstime.com/b/italiano-d-colorful-write-italian-language-rendering-word-written-letters-standing-slightly-bent-white-surface-107234848.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Italy</h5>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br/>

          {/* Hobbies */}
          <div className="container">
            <h1>Hobbies</h1>
            <div className="row row-cols-2 row-cols-lg-4 g-4 align-items-center">
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Drawing" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://de-cavern.co.nz/wp-content/uploads/2020/05/depositphotos_11503956-stock-illustration-kid-drawing-with-pencil.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Drawing</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Studying" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://img.freepik.com/premium-vector/illustration-culture-reading-books_604090-53.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Studying</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <label class="optionBox">
                    <input type="checkbox" name="hobby" value="Sports" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                    <img src="https://freedesignfile.com/upload/2020/12/Kids-doing-sports-cartoon-vector.jpg" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h4 className="card-title">Sports</h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                <label class="optionBox">
                    <input type="checkbox" name="hobby" value="SingingAndDancing" onChange={(e)=>this.setState({hobby: e.target.value})}/>
                    <div class="optionImg">
                      <img src="https://img.freepik.com/free-vector/boy-singing-dancing_1308-107244.jpg?w=2000" class="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Singing & Dancing</h5>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <br/>

        </div>:null}

        {/* Adult Component */}
        {this.state.adult ? <div>

          {/* Education */}
          <div className="container text-center">
            <div className="row g-2">
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>Educated</h2></div>
              </div>
              <div className="col-6">
                <div className="p-3 border bg-light"><h2>UnEducated</h2></div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="Educated" onChange={(e)=>this.setState({education: e.target.value})}/>
                    <div class="optionImg">
                    <img id="signUpImages" src="https://st4.depositphotos.com/4881653/25636/v/1600/depositphotos_256368958-stock-illustration-student-or-schoolboy-studying-at.jpg" class="img-fluid" alt="Boy"/>
                    </div>
                  </label>
                </div>
              </div>

              <div className="col-6">
                <div className="p-3 border bg-light">
                  <label class="optionBox">
                    <input type="radio" name="gender" value="UnEducated" onChange={(e)=>this.setState({education: e.target.value})}/>
                    <div class="optionImg">
                      <img id="signUpImages" src="https://thumbs.dreamstime.com/z/child-suffering-dyslexia-having-difficulty-reading-book-stressed-little-boy-doing-hard-homework-desk-disorder-223355452.jpg" class="img-fluid" alt="Girl"/>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr/>

          {/* Hobbies */}
          <AddMore/>
          <br/>

        </div>:null}

        {/* Senior Component */}
        {this.state.senior ? <div>

        {/* Education */}
        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-3 border bg-light"><h2>Educated</h2></div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light"><h2>UnEducated</h2></div>
            </div>
            

            <div className="col-6">
              <div className="p-3 border bg-light"><img id="signUpImages" src="https://st4.depositphotos.com/4881653/25636/v/1600/depositphotos_256368958-stock-illustration-student-or-schoolboy-studying-at.jpg" class="img-fluid" alt="Boy"/></div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light"><img id="signUpImages" src="https://thumbs.dreamstime.com/z/child-suffering-dyslexia-having-difficulty-reading-book-stressed-little-boy-doing-hard-homework-desk-disorder-223355452.jpg" class="img-fluid" alt="Girl"/></div>
            </div>
          </div>
        </div>
        <br/>
        </div>:null}

        {/* Sign Up Button */}
        <form>
          <button type="submit" className="btn btn-primary">
            <h1>Sign Up</h1>
          </button>
        </form>
        <br/><br/>

      </div>
    )
  }
}