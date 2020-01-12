import React, {Component} from 'react'
import '../components/About.css'
import $ from 'jquery'
import about1 from '../images/about1.jpg'

class About extends Component {
    componentDidMount() {
        const M = window.M;
        var el = $('.tabs');
        // eslint-disable-next-line no-unused-vars
        var instance = M.Tabs.init(el, {});

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            // eslint-disable-next-line no-unused-vars
            var instances = M.Parallax.init(elems, 320);
          });
    }
    render() {
        return(
            <div className="container1">
                <div className="parallax-container" id="pc2">
                    <div className="parallax">
                        <img src={about1} alt="parallax1"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 16">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#test1">Advisory Board</a></li>
                            <li className="tab col s3"><a href="#test2">Management</a></li>
                            <li className="tab col s3"><a href="#test3">Disabled Tab</a></li>
                            <li className="tab col s3"><a href="#test4">Test 4</a></li>
                        </ul>
                    </div>
                    <div id="test1" className="col s12">Test 1</div>
                    <div id="test2" className="col s12">Test 2</div>
                    <div id="test3" className="col s12">Test 3</div>
                    <div id="test4" className="col s12">Test 4</div>
                    
                </div>
            </div>
        )
    } 
}
export default About