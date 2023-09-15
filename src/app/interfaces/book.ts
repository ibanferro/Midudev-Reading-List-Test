import { Author } from "./author"

export interface Book {
  book: BookProperties
}

export interface BookProperties {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}
