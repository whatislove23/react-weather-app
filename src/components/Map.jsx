import { useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0],
});

export default ({ lat, lon, setCoord }) => {
  const coord = [lat, lon];
  const markerRef = useRef(null);
  const [position, setPosition] = useState(coord);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          setCoord([marker.getLatLng().lat, marker.getLatLng().lng]);
        }
      },
    }),
    []
  );
  return (
    <div className="w-4/5 mx-auto my-5 bg-gradient-to-b from-sky-200 to-sky-400 text-white rounded-xl p-4 mt-10 flex flex-col items-center shadow-inne container 2xlr">
      <div className=" flex flex-col justify-between  w-full  text-white text-center text-3xl mt-2 sm:text-5xl">
        Choose location
        <div className="rounded-lg overflow-hidden z-50 mt-2 ">
          <MapContainer center={coord} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={position}
              ref={markerRef}
              draggable
              eventHandlers={eventHandlers}
              icon={defaultMarker}
            ></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
