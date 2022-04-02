import axios from 'axios'

export const getAllAccoms = (select) => axios.get('http://localhost:3000/api/accommodations',{
    params: {
        filter: {
            city: select,
            ratingFrom: '',
            ratingTo: ''
        }
    }
})
export const getDetails = (id) => axios.get(`http://localhost:3000/api/accommodations/${id}`)
export const getPlaces = () => axios.get('http://localhost:3000/api/places')