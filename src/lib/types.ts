interface Image {
  id: number,
  alternativeText?: string,
  name: string,
  url: string,
}

export interface Post {
    id: number,
    title: string,
    description: string,
    image: Image,
    intro: any,
    contenu: any,
    slug: string,
    createdAt: string,
    updatedAt: string,
  }
  