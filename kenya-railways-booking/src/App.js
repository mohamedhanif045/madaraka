import React from 'react';
import Navbar from './Navbar';
import Gallery from './Gallery';
import Stations from './Stations';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Gallery />
            <section id="stations">
                <Stations />
            </section>
        </div>
    );
}

export default App;
