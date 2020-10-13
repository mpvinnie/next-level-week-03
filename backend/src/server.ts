import express from 'express'
import { getRepository } from 'typeorm'
import Orphange from './models/Orphanage'

import './database/connection'

const app = express()

app.use(express.json())

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body

  const orphanagesRepository = getRepository(Orphange)

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  })

  await orphanagesRepository.save(orphanage)

  return response.json(orphanage)
})

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333! 🎚️')
})
