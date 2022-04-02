import axios from 'axios'

export const getAllAccoms = () => axios.get('http://localhost:3000/api/accommodations',{
    params: {
        city: '',
        ratingFrom: '',
        ratingTo: ''
    }
})
export const getDetails = () => axios.get('http://localhost:3000/api/accommodations/:id')
export const getPlaces = () => axios.get('http://localhost:3000/api/places')