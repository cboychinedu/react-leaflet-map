// Importing the necessary modules 
import './App.css';
import React from 'react'; 
import { Component } from 'react';
import "leaflet/dist/leaflet.css"; 
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet'
import { Icon } from 'leaflet';
import markerIcon from './images/marker-icon.png'

// MapsUrl: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.jpg
// MapsUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

// Creating an icon 
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484167.png", 
  iconUrl: markerIcon, 
  iconSize: [38, 38]
})

// Creating the UI component App 
class App extends Component {
  state = {
    markers: [
      {
        geocode: [48.86, 2.3522], 
        popUp: "Hello, i am the first marker"
      }, 
      {
        geocode: [48.85, 2.3522], 
        popUp: "Hello, i am the second marker"
      }, 
      {
        geocode: [48.855, 2.39], 
        popUp: "Hello, i am the third marker"
      }
    ]
  }

  clicked = () => {
    console.log("hello, clicked")
  }

  // Render the App component 
  render() {
    return(
      <React.Fragment> 
          {/* Adding the map-leaflet */}
          <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollwheelZoom={false}>
          <TileLayer attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png' />

            {/* <Marker position={[51.505, -0.09]}>
              <Popup>
                A preety css3 popup. <br /> Easily customizable. 
              </Popup>

            </Marker> */}

              <Circle center={[50.5, 30.5]} radius={200} fillColor="red" color="red" >
                <Popup> 
                    <p> Blast Radius </p>
                </Popup>
              </Circle>

              <CircleMarker center={[51.505, -0.109]} radius={90} color="yellow">
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </CircleMarker>

            {
              // Looping through the state variable 
              this.state.markers.map(marker => {
                // console.log(marker.geocode); 

                return (
                  <Marker position={marker.geocode} icon={customIcon}>
                      <Popup>
                          <p className="popup-style"> {marker.popUp} </p>
                      </Popup>
                  </Marker>
                )
               
              })
            }

          </MapContainer>

      </React.Fragment>

    )
      
  }

}; 

// Exporting the App 
export default App;
