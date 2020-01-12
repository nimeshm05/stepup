import React, {Component} from 'react'
import '../components/Home.css'
import parallax from '../images/parallax1.jpg'
import parallax2 from '../images/parallax2.jpg'

class Home extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            // eslint-disable-next-line no-unused-vars
            var instances = M.Parallax.init(elems, {});
          });
    }
    render() {
        return(
            <div className="home">
                <div className="parallax-container" id="pc1">
                    <div className="center-align" id="back-text">
                        <h1 className="head">Business Growth Accelerator</h1>
                    </div>
                    <div className="container">
                        <h2 className="center-align" id="head-para">Game-Changing interventions for SMEs</h2>
                    </div>
                </div>

                <div className="container1">
                    <h2 className="center-align" id="stepup">StepUp Accelerator Program</h2>

                    <p className="left-align1" id="phase1">
                    The StepUp Accelerator programme is designed
                    to help SMEs scale-up their venture, make it more
                    profit-oriented, investment ready and develop their
                    entrepreneurial leadership. The BGA supports the
                    growth ambitions of enterprises as there are several
                    barriers which hamper the growth.
                    </p>

                    <blockquote id="phase1">
                    The BGA aims to address the following questions effectively:
                    </blockquote>

                    <ol className="collection" id="questions">
                        <li className="collection-item">Have you wondered on how to take your business to a next level?</li>
                        <li className="collection-item" id="hide">Is your organization having systems and processes that accelerate the growth? </li>
                        <li className="collection-item">Are you thinking about restructuring the organization for better performance?</li>
                        <li className="collection-item">Are you finding it challenging to manage teams and employees?</li>
                        <li className="collection-item">Do you want to make your profit margins soar and make the organization more effective?</li>
                        <li className="collection-item" id="hide">Are you adding to economic value of your business year or year?</li>
                        <li className="collection-item">In a nutshell, are you able to enjoy your life as a business man?</li>
                    </ol>          
                </div>

                <div className="container2">
                    <div className="parallax-container" id="pc2">
                        <div className="parallax">
                            <img src={parallax} alt="parallax1" className="responsive-img"/>
                        </div>
                    </div>
                </div>

                <div className="container3">
                    <h2 className="center-align" id="stepup">Why StepUp is Unique</h2>

                    <p id="phase2">
                    BGA is designed in such way that it addresses the challenges
                    faced by SMEs by developing the competence and strategic
                    thinking within the organization using well-researched
                    Organization Development and strategic management
                    principles, in the thrust areas of:
                    </p>

                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card blue lighten-1 z-depth-3">
                                <div className="card-content white-text">
                                    <span className="card-title center-align" id="card">Coaching</span>
                                    <p>
                                    You will have a personal executive Coach who will offer you advice and be your
                                    sounding board and act as a mirror.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card blue lighten-1 z-depth-3">
                                <div className="card-content white-text">
                                    <span className="card-title center-align" id="card">Networking and Partnerships</span>
                                    <p>
                                    Possibilities are so high for opportunities
                                    to network locally and internationally.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card blue lighten-1 z-depth-3">
                                <div className="card-content white-text">
                                    <span className="card-title center-align" id="card">Leadership</span>
                                    <p>Acquire tools to develop stronger entrepreneurial leadership and lead your organisation to greater heights.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" id="hide">
                        <div className="col s10 m6">
                            <div className="card blue lighten-1 z-depth-3">
                                <div className="card-content white-text">
                                    <span className="card-title center-align" id="card">Bespoke Service</span>
                                    <p>
                                    Get individualized and tailored business development support from the trained growth
                                    coaches who will walk you through and support you in your business journey.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s10 m6">
                            <div className="card blue lighten-1 z-depth-3">
                                <div className="card-content white-text">
                                    <span className="card-title center-align" id="card">Growth Strategy</span>
                                    <p>
                                    Stepup Consulting has developed an innovative consultancy model.
                                    It has trained experienced Facilitators, Coaches and Consultants and learning methodology
                                    hat lead to an increase in your revenue and profits
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container4">
                    <div className="parallax-container" id="pc3">
                        <div className="parallax">
                            <img src={parallax2} alt="parallax1"/>
                        </div>
                    </div>
                </div>

                <div className="container5">
                    <h2 className="center-align" id="stepup">Why you should be part of BGA</h2>

                    <blockquote className="phase3">
                    In the world of incubators, startup accelerators and its
                    ecosystems there is no room for Small and Medium
                    Enterprises. The whole game of acceleration and investment
                    happens until the enterprise is five years old. 
                    </blockquote>

                    <blockquote className="phase3">
                    The enterprise fails or succeeds before five years, then it gets into normal
                    business scenario where the entrepreneurs run the firm with
                    their own funds, network and hard marketing. 
                    </blockquote>

                    <blockquote className="phase3">
                    However, there are several successful SMEs which have crossed critical
                    financial benchmarks, cash profits and to an extent of
                    operational excellence.
                    </blockquote>

                    <blockquote className="phase3">
                    The challenge is to find the <b>next growth path.</b> 
                    </blockquote>
                </div>

            </div>
        )
    } 
}
export default Home