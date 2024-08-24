import React from 'react';
import './Stations.css'; // Ensure you create this CSS file for styling

const Stations = () => {
    const stations = [
        {
            name: "Nairobi Terminus",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/nairobi.jpg"
        },
        {
            name: "Mtito Andei Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/mtito.jpg"
        },
        {
            name: "Mombasa Terminus",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/mombasa.jpg"
        },
        {
            name: "Voi Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/voi.jpg"
        },
        {
            name: "Athi River Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/athi.jpg"
        },
        {
            name: "Emali Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/emali.jpg"
        },
        {
            name: "Mariakani Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/mariakani.jpg"
        },
        {
            name: "Miasenyi Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/miasenyi.jpg"
        },
        {
            name: "Kibwezi Station",
            country: "Kenya",
            imageUrl: "https://metickets.krc.co.ke/images/stations/kibwezi.jpg"
        }
    ];

    return (
        <div className="stations-container">
            <h1>Book a Train</h1>
            <h2>Stations</h2>
            <div className="stations-grid">
                {stations.map((station, index) => (
                    <div key={index} className="station-card">
                        <img src={station.imageUrl} alt={station.name} className="station-image" />
                        <div className="station-info">
                            <h3>{station.name}</h3>
                            <p>{station.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stations;
