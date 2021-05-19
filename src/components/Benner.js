import React from 'react';
import "./Benner.css";

function Benner() {
    return (
        <div className="benner">
        <div className="container-fluid">
            <div className="site-slider">
                <div className="slider-one">
                    <div>
                        <img src="./bg1.jpg" className="img-fluid" alt="bg1" />
                    </div>
                    <div>
                        <img src="./bg2.jpg" className="img-fluid" alt="bg2" />
                    </div>
                    <div>
                        <img src="./bg3.jpg" className="img-fluid" alt="bg3" />
                    </div>
                    <div>
                        <img src="./bg4.jpg" className="img-fluid" alt="bg4" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Benner;
