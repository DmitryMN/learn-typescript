import { type } from "os"

type AdressType = {
    title: string
    country: string
}

type TechnologyType = {
    id: number
    title: string
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechnologyType>
}
// CityType typisation
type StreetType = {
    title: string
}

type AddressLocation = {
    number: number
    street: StreetType
}

type HouseType = {
    buildedAt: number
    repaired: number
    address: AddressLocation
}

export type CityType = {
    title: string
    houses: Array<string>
    governmentBuildings: Array<string>
    citizensNumber: number
}

const student: StudentType = {
    name: "Dimych",
    age: 36,
    isActive: false,
    address: {
        title: "Volskaya",
        country: "Russia",
    },
    technologies: [
        {id: 1, title: "CSS"},
        {id: 2, title: "React"},
        {id: 3, title: "Redux"},
        {id: 4, title: "Node js"},
    ],
}
