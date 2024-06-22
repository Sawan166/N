import React, { Component } from "react";
// import Images from "../Images/index.js";

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseAvailable: "",
            child: false,
            young: false,
            adult: false,
            senior: false,
        };
    }
    componentDidMount(){
        fetch("http://localhost:4000/courseAvailable",{
            method: "POST",
            crossDomain: true,
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => res.json())
        .then((data) => {
            this.setState({ courseAvailable: data.data})
        });
    }
    render(){
        return (
            <div>
                <hr/><br/>
                <h1>Course Available</h1><br/>
                <div className="container border border-dark rounded p-3 mb-2">

                    <div className="d-flex justify-content-evenly pt-2">
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: true, young: true, adult: true, senior: true})}
                        >All</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: true, young: false, adult: false, senior: false})}
                        >Kids</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: true, adult: false, senior: false})}
                        >Young</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: false, adult: true, senior: false})}
                        >Adult</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: false, adult: false, senior: true})}
                        >Senior</button>
                    </div><hr/>

                    {/* Child */}
                    {this.state.child ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://yt3.googleusercontent.com/ytc/AMLnZu9eJMZXrwTK_XCXNEKUAL1c_MWk7OoBXAMKehtgpg=s900-c-k-c0x00ffffff-no-rj" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">PeekaBoo Kidz</h5>
                                <p class="card-text">Best Learning Videos For Kids from The Dr.Binocs Show. Fun Learning Videos For Kids By Peekaboo Kids</p>
                                <a href="https://www.youtube.com/watch?v=OTuph9pJWU4" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://media.istockphoto.com/id/502967204/vector/alphabet-a-to-z-1.jpg?s=612x612&w=0&k=20&c=H38fNIFLvLHQykEa65f4DRmemm3Yu73Wd77b8pmaGWI=" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">ABC Phonics Alphabet</h5>
                                <p class="card-text">ABC Phonics Alphabet - Letter A to Z | Learning English for kids  | Collection of Alphabet Phonics</p>
                                <a href="https://www.youtube.com/watch?v=mnMpjBvUopA" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://bsebresult.in/wp-content/uploads/2021/05/hindi-vowels-Vowels-In-Hindi.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Hindi Vowels Pronunciation</h5>
                                <p class="card-text">In this Course, Learn phonics of hindi vowels. How to pronounce अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अं, अः</p>
                                <a href="https://www.youtube.com/watch?v=kpC2FdTmjwc" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://i.ytimg.com/vi/mjlsSYLLOSE/maxresdefault.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Basic Addition</h5>
                                <p class="card-text">Basic Addition|Addition for Kids|Basic Addition For Kindergarden|Learn Addition|Add|Premath Concept</p>
                                <a href="https://www.youtube.com/watch?v=_b0oMzlvERI" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Young */}
                    {this.state.young ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://www.aakash.ac.in/blog/wp-content/uploads/2022/03/Blog-Image-9.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">The Fundamental Unit of Life Cell</h5>
                                <p class="card-text">The Fundamental Unit of Life Cell Class 9 One-Shot Easiest Lecture | Class 9 Science</p>
                                <a href="https://www.youtube.com/watch?v=OXEN7ccYD9c" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://e7.pngegg.com/pngimages/174/687/png-clipart-percentage-percent-sign-percent-and-matches-people-love-3d-computer-graphics.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Percentage</h5>
                                <p class="card-text">Learn to calculate Percentage quickly</p>
                                <a href="https://www.youtube.com/watch?v=LdpsPknN-Ew&list=PLOoogDtEDyvvqaKSM-ZkwAqUyjyR402HH&ab_channel=FeelFreetoLearn" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://m.media-amazon.com/images/I/91Pv0s7UtEL.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Class 12 Computer Science</h5>
                                <p class="card-text">In this video we have discussed computer science syllabus for session 2022-23, and also we explained , how can you prepare for board exam .</p>
                                <a href="https://www.youtube.com/watch?v=8UW7IdUBLds&list=PLyhfXGRX10EtSYaW5AvA2ZWjT1ci9slgi&ab_channel=TejpalMaurya" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Methane-3D-balls.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">HydroCarbons</h5>
                                <p class="card-text">In this session, Sakshi Vora will be discussing Hydrocarbons for JEE 2023 chemistry.</p>
                                <a href="https://www.youtube.com/watch?v=GHIKYDj14uY&ab_channel=UnacademyAtoms" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Adult */}
                    {this.state.adult ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://i.ytimg.com/vi/ZBu1S4ZxCVo/maxresdefault.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">60 Days Masterplan To Score 650+ in NEET</h5>
                                <p class="card-text">Hello Students, watch the NEET Strategy Session about " 60 Days Masterplan To Score 650+ in NEET 2023</p>
                                <a href="https://www.youtube.com/watch?v=ZBu1S4ZxCVo" class="btn btn-primary">Checkout Course</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Complete 1 Year UPSC CSE Preparation Strategy</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="https://www.youtube.com/watch?v=hybLXw-rzrs&ab_channel=Let%27sCrackUPSCCSE" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Senior */}
                    {this.state.senior ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://www.sundayguardianlive.com/wp-content/uploads/2019/07/old-learning.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Senior COurse</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}


                </div>

                <footer><h4>&copy; Rock</h4></footer>
            </div>
        )
    }
}