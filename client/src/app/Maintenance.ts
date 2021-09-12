import { Part } from './Part'

export interface Maintenance {
    _id?: string,
    date: string,
    type: string,
    carid: string,
    parts: Part[]
}