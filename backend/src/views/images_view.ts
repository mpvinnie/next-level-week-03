import Image from '../models/Image'

interface IViewImage {
  id: number
  url: string
}

export default {
  render(image: Image): IViewImage {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]): IViewImage[] {
    return images.map((image) => this.render(image))
  }
}
