import { Request, Response } from 'express'

import { getRepository } from 'typeorm'
import Orphange from '../models/Orphanage'

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const orphanagesRepository = await getRepository(Orphange)

    const orphanages = await orphanagesRepository.find()

    return response.json(orphanages)
  },

  async create(request: Request, response: Response): Promise<Response> {
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

    return response.status(201).json(orphanage)
  }
}
