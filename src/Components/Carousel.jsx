import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const DemoCarousel=()=>{
        return (
            <Carousel>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/ashok-gehlot-2-1.jpg" />
                    <h4 className="legend">Gehlot's power play made Cong leadership cut sorry figure</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/UPSC-KEY-Pic-With-Logo-5.png?resize=720,405" />
                    <h4 className="legend">UPSC Key Sept 27: What to read and why for UPSC CSE</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/cows-2.jpg" />
                    <h4 className="legend">Gujarat: Cattle on roads, in courts as shelters let them loose</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/Opinion-1-14.jpg" />
                    <h4 className="legend">PM Mehta writes: Diaspora reflecting divisions of Indian politics</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/vijay-rupani-2.jpg" />
                    <h4 className="legend">Vijay Rupani interview: 'CM candidate is decided by the high command'</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/06/UPSC-KEY-Pic-With-Logo.jpg?resize=720,405" />
                    <h4 className="legend">UPSC Key Sept 28: What to read and why for UPSC CSE</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/Opinion-1-16.jpg" />
                    <h4 className="legend">C Raja Mohan writes: Russia's nuclear threat may force Europe to build arsenal</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/Nitish-with-Apna-Dal-K-leader-Krishna-Patel.-@adkamerawadi.jpg" />
                    <h4 className="legend">Kurmi club: On national path, Nitish looks at Sonelal Patel legacy</h4>
                </div>
                <div>
                    <img src="https://images.indianexpress.com/2022/09/E-global-I.jpg" />
                    <h4 className="legend">Why India has lashed out at the US over its F-16 package to Pakistan</h4>
                </div>
            </Carousel>
        );
    }


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));