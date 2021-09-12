import { Part } from './Part'

export interface Maintenance {
    _id?: string,
    date: string,
    carid: string,
    parts: Part[]
}