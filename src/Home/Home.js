import selfimage from '../../src/self.jpg';
import Tacha from '../../src/TACHA.png';
import Occhiali from '../../src/Occhiali.png';
import Stego from '../../src/Camouflage.png';
import '../App.css';
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill';
import React from 'react';
import Contact from './Contact.js';

// import ProjectsList from '../Home/Project.js';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBuBA0Ae1A-H33M3b2WSFm2XHX7H_GB07o",
//     authDomain: "portfolio-16430.firebaseapp.com",
//     projectId: "portfolio-16430",
//     storageBucket: "portfolio-16430.appspot.com",
//     messagingSenderId: "1041923587025",
//     appId: "1:1041923587025:web:c872acc7327fb3cfdefef0",
//     measurementId: "G-1Z4SFYNJ2C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const gra = function (min, max) {
//     return Math.random() * (max - min) + min;
// }
const init = function () {
    let items = document.querySelectorAll('section');
    // for (let i = 0; i < items.length; i++){
    // 	items[i].style.background = randomColor({luminosity: 'light'});
    // }
    cssScrollSnapPolyfill()
}
init();

function Home() {
    return (
        <div>
            <section>
                <div class="first">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact Me</li>
                        </ul>
                    </nav>
                    <div class="text-first">
                        <h1>PORTFOLIO</h1>
                        <br>
                        </br>
                        <br></br>
                        <h3>2020----------------------------------------------2024</h3>
                    </div>
                </div>

            </section>
            <section>
                <div class="second">
                    <h1>About Me</h1>
                    <div class="second-container">
                        <img src={selfimage}>
                        </img>
                        <div class="second-text">
                            <p>
                                As twilight settled and the sun's glow faded, whispers of nostalgia filled the air, stirring memories long tucked away. Each moment, a brushstroke on the canvas of time, painted the sky in hues of warmth and longing. In the quiet of dusk, the heart's gallery opened, revealing stories etched in the tapestry of life, weaving a tale of love and loss, hope and remembrance.</p>
                            <br>
                            </br>
                            <br></br>
                            <h2>Skills</h2>
                            <ul>
                                <li>Manual Testing</li>
                                <li>Automation using robot framework</li>
                                <li>Basics on Security Testing using OWASP tool</li>
                                <li>HTML, CSS, JavaScript</li>
                            </ul>
                            <br></br><br></br>
                            <h2>Education</h2>
                            <ul>
                                <li>Elementary Education: Little Angels School</li>
                                <li>Secondary Education: Uniglobe SS College</li>
                                <li>Undergraduate Studies: Prime College</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div class="third">
                    <h1>Projects</h1>
                    <div class="Project">
                        <div class="Project1">
                            <img src={Tacha} className="project-img"></img>
                            <div class="Project-title">
                                <h3>Ta-Cha</h3>
                                <button>Website</button>
                            </div>
                            <p>
                                Ta-Cha is a vibrant hub for reading and writing blogs. Express yourself, connect with others, and explore endless topics. Join our community today</p>
                            <button id="git-button">View Project in GitHub</button>
                        </div>
                        <div class="Project1">
                            <img src={Occhiali} className="project-img"></img>
                            <div class="Project-title">
                                <h3>Occhiali</h3>
                                <button>Website</button>
                            </div>
                            <p>Occhiali: Your portal to stylish vision. Explore a range of sunglasses and eyeglasses for the perfect blend of fashion and function
                            </p>
                            <button id="git-button">View Project in GitHub</button>
                        </div>
                        <div class="Project1">
                            <img src={Stego} className="project-img"></img>
                            <div class="Project-title">
                                <h3>Camouflage: Video Steganography</h3>
                                <button>Website</button>
                            </div>
                            <p>Camouflage: Concealing secrets within pixels. Unlock the art of hidden messages with our video steganography solution.
                            </p>
                            <button id="git-button">View Project in GitHub</button>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div class="forth">

                    <div class="contact">
                        <Contact />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
