import React from "react";
import Head from "next/head";

const MyMap = () => {
  const [state, setState] = React.useState({
    MapContainer: null,
    TitleLayer: null,
    Marker: null,
    Popup: null,
  });

  const [markerIcon, setMarker] = React.useState(0);

  React.useEffect(() => {
    let { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
    setState({ MapContainer, TileLayer, Marker, Popup });

    let L = require("leaflet");
    const markerIcon = L.icon({
      iconUrl: `/marker.png`,
      shadowUrl: `/shadow.png`,

      iconSize: [38, 60], // size of the icon
      shadowSize: [50, 79], // size of the shadow
      iconAnchor: [19, 60], // point of the icon which will correspond to marker's location
      shadowAnchor: [19, 60], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    setMarker(markerIcon);
  }, []);

  const { MapContainer, TileLayer, Marker, Popup } = state;

  const position = [27.720449, 85.309551];

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Head>
      <div>
        {MapContainer && Marker ? (
          <MapContainer
            style={{
              height: "60vh",
              width: "100vw",
            }}
            center={position}
            zoom={15}
          >
            <TileLayer url="https://api.mapbox.com/styles/v1/aabhas/ck2dbytwy0afz1cn1pfeyeftc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWFiaGFzIiwiYSI6ImNrMmQycGFnajNhY2MzbHBoMjJtbWZrcTQifQ.jixPIQmH1hTa9H-zbVbimw" />
            {/* <TileLayer
              url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=TirUZYR1qbXzGvAv7lO6"
              tileSize={512}
              zoomOffset={-1}
              minZoom={1}
              crossOrigin={true}
            /> */}
            {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

            <Marker position={position} icon={markerIcon}>
              <Popup>Our Office.</Popup>
            </Marker>
          </MapContainer>
        ) : null}
      </div>
    </>
  );
};

export default MyMap;
