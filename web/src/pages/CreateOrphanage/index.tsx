import React, { FormEvent, useCallback, useState, ChangeEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'
import { useHistory } from 'react-router-dom';
import { LeafletMouseEvent } from 'leaflet'

import Sidebar from '../../components/Sidebar'
import colors from '../../styles/colors';
import mapIcon from '../../utils/mapIcon';

import {
  Container,
  Content,
  Form,
  InputContainer,
  OpenOnWeekendContainer,
  SelectButton,
  ImagesContainer
} from './styles';
import api from '../../services/api';

const CreateOrphanage: React.FC = () => {
  const history = useHistory()

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }, [])

  const handleSelectImages = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }, [])

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault()

    const { latitude, longitude } = position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))

    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado com sucesso!')

    history.push('/app')

  }, [about, history, images, instructions, name, open_on_weekends, opening_hours, position])

  return (
    <Container>
      <Sidebar />

      <Content>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-3.0766069, -60.0143848]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[
                    position.latitude,
                    position.longitude
                  ]}
                />
              )}
            </Map>

            <InputContainer>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="images">Fotos</label>
              <ImagesContainer>
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name} />
                  )
                })}

                <label htmlFor="image[]">
                  <FiPlus size={24} color={colors.blue} />
                </label>
              </ImagesContainer>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputContainer>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputContainer>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                maxLength={300}
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="opening_hours">Horário</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <OpenOnWeekendContainer>
                <SelectButton
                  type="button"
                  active={open_on_weekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </SelectButton>
                <SelectButton
                  type="button"
                  active={!open_on_weekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </SelectButton>
              </OpenOnWeekendContainer>
            </InputContainer>
          </fieldset>

          <button type="submit">Confirmar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateOrphanage;
