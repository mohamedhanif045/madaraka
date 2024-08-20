import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [showNairobi, setShowNairobi] = useState(false);
    const [showMombasa, setShowMombasa] = useState(false);
    const [slideIndex, setSlideIndex] = useState(1);

    const handleNairobiClick = () => {
        setShowNairobi(!showNairobi);
    };

    const handleMombasaClick = () => {
        setShowMombasa(!showMombasa);
    };

    const plusSlides = (n) => {
        const newIndex = (slideIndex + n - 1 + 4) % 4 + 1;
        setSlideIndex(newIndex);
    };

    useEffect(() => {
        const slides = document.querySelectorAll(".mySlides");
        slides.forEach((slide, index) => {
            slide.style.display = (index + 1 === slideIndex) ? "block" : "none";
        });
    }, [slideIndex]);

    return (
        <section id="gallery">
            <div className="gallery-grid">
                <div className="featured-stations">
                    <h2 className="section-title">Featured Stations</h2>

                    <div className="card">
                        <img 
                            src="https://metickets.krc.co.ke/images/stations/54_n.jpg" 
                            alt="Nairobi Terminus" 
                            className="station-image" 
                        />
                        <div className="card-content">
                            <h3>Nairobi Terminus</h3>
                            <p>Located at Syokimau, Nairobi. Found just south of the capital city. Built as two trains with a bridge on top.</p>
                            <button className="toggle-btn" onClick={handleNairobiClick}>
                                {showNairobi ? 'Hide' : 'SEE ALL'}
                            </button>
                            {showNairobi && (
                                <div className="image-grid">
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/84_n.jpg" 
                                            alt="Nairobi Terminus Interior View" 
                                            className="grid-image" 
                                        />
                                        <p>Interior view of Nairobi Terminus, showcasing its modern design.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/85_n.jpg" 
                                            alt="Nairobi Terminus Platform" 
                                            className="grid-image" 
                                        />
                                        <p>Platform area of Nairobi Terminus, designed for efficient passenger flow.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/voi.jpg" 
                                            alt="Nairobi Terminus Train Departure" 
                                            className="grid-image" 
                                        />
                                        <p>View of a train departing from Nairobi Terminus, emphasizing the station's functionality.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/athi_river.jpg" 
                                            alt="Nairobi Terminus Exterior" 
                                            className="grid-image" 
                                        />
                                        <p>Exterior shot of Nairobi Terminus, highlighting its architectural style.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card">
                        <img 
                            src="https://metickets.krc.co.ke/images/stations/85_n.jpg" 
                            alt="Mombasa Terminus" 
                            className="station-image" 
                        />
                        <div className="card-content">
                            <h3>Mombasa Terminus</h3>
                            <p>Located in Miritini, Mombasa. Built as concentric circles and a central tower, representing a ripple in the ocean.</p>
                            <button className="toggle-btn" onClick={handleMombasaClick}>
                                {showMombasa ? 'Hide' : 'SEE ALL'}
                            </button>
                            {showMombasa && (
                                <div className="image-grid">
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/emali.jpg" 
                                            alt="Mombasa Terminus Exterior View" 
                                            className="grid-image" 
                                        />
                                        <p>Exterior view of Mombasa Terminus, showcasing its unique design elements.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/mariakani.jpg" 
                                            alt="Mombasa Terminus Interior View" 
                                            className="grid-image" 
                                        />
                                        <p>Interior view of Mombasa Terminus, highlighting the modern amenities available.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/miasenyi_s.jpg" 
                                            alt="Mombasa Terminus Passenger Area" 
                                            className="grid-image" 
                                        />
                                        <p>Passenger area within Mombasa Terminus, designed for comfort and efficiency.</p>
                                    </div>
                                    <div>
                                        <img 
                                            src="https://metickets.krc.co.ke/images/stations/kibwezi.jpg" 
                                            alt="Mombasa Terminus Departure Area" 
                                            className="grid-image" 
                                        />
                                        <p>Departure area at Mombasa Terminus, showcasing its operational layout.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="gallery-section">
                    <h2 className="section-title">Gallery</h2>
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <img 
                                src="https://metickets.krc.co.ke/images/gallery/07_n.jpg" 
                                alt="Train Interior 1" 
                                className="gallery-image" 
                            />
                            <p>Inside view of the Nairobi-Mombasa express train, showing the seating arrangement and interior design.</p>
                        </div>
                        <div className="mySlides fade">
                            <img 
                                src="https://metickets.krc.co.ke/images/gallery/56_n.jpg" 
                                alt="Train Interior 2" 
                                className="gallery-image" 
                            />
                            <p>View of the first-class compartment with spacious seating and advanced amenities.</p>
                        </div>
                        <div className="mySlides fade">
                            <img 
                                src="https://metickets.krc.co.ke/images/gallery/60_n.jpg" 
                                alt="Train Interior 3" 
                                className="gallery-image" 
                            />
                            <p>Second-class seating area, offering comfort and convenience for travelers.</p>
                        </div>
                        <div className="mySlides fade">
                            <img 
                                src="https://metickets.krc.co.ke/images/gallery/64_n.jpg" 
                                alt="Train Interior 4" 
                                className="gallery-image" 
                            />
                            <p>Passenger lounge area, providing a relaxing space to unwind during the journey.</p>
                        </div>
                    </div>
                    <div className="gallery-buttons">
                        <button className="gallery-nav-btn" onClick={() => plusSlides(-1)}>⬅</button>
                        <button className="gallery-nav-btn" onClick={() => plusSlides(1)}>➡</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
