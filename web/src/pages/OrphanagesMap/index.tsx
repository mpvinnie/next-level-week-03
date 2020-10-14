import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import colors from '../../styles/colors'

import 'leaflet/dist/leaflet.css'
import './leaflet.css'

import mapMargerImg from '../../images/map-marker.svg'

import { Container, SideBar } from './styles'

const mapIcon = Leaflet.icon({
  iconUrl: mapMargerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMargerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Manaus</strong>
          <span>Amazonas</span>
        </footer>
      </SideBar>

      <Map
        center={[-3.0766069, -60.0143848]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          icon={mapIcon}
          position={[-3.0766069, -60.0143848]}
        >
          <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
            Orfanato Sunnyside
            <Link to="">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="">
        <FiPlus size={32} color={colors.primary} />
      </Link>
    </Container>
  )
}

export default OrphanagesMap