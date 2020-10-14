import Leaflet from 'leaflet'

import mapMakgerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMakgerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default mapIcon