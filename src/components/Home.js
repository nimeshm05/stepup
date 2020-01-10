import React, {Component} from 'react'
import '../components/Home.css'

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
                <div className="parallax-container">
                <div className="center-align" id="back-text">
                    <h1 className="head">Business Growth Accelerator</h1>
                </div>
                <div className="container">
                    <h2 className="center-align" id="head-para">Game-Changing interventions for SMEs</h2>
                </div>
            </div>
            </div>
        )
    } 
}
export default Home