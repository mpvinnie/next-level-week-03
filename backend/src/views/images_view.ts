import Image from '../models/Image'

interface IViewImage {
  id: number
  url: string
}

export default {
  render(image: Image): IViewImage {
    return {
      id: image.id,
      url: `http://192.168.0.162:3333/uploads/${image.path}`
    }
  },

  renderMany(images: Image[]): IViewImage[] {
    return images.map((image) => this.render(image))
  }
}
