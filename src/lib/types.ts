interface Image {
  id: number,
  alternativeText?: string,
  name: string,
  url: string,
}

export interface Post {
    id: number,
    Titre: string,
    Description: string,
    Image: Image,
    Intro: any,
    Contenu: any,
    slug: string,
    createdAt: string,
    updatedAt: string,
  }
  