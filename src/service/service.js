import axios from 'axios'

export const getAllAccoms = (select, pgSize, ratingFrom, ratingTo) => axios.get('http://localhost:3000/api/accommodations',{
    params: {
        page: 1,
        pageSize: pgSize,
        filter: {
            city: select,
            ratingFrom: ratingFrom,
            ratingTo: ratingTo
        }
    }
})
export const getDetails = (id) => axios.get(`http://localhost:3000/api/accommodations/${id}`)
export const getReviews = (id) => axios.get(`http://localhost:3000/api/accommodations/${id}/reviews`)
export const getPlaces = () => axios.get('http://localhost:3000/api/places')
export const postAccom = (accomm) => axios.post('http://localhost:3000/api/accommodations', accomm)
export const postImage = (formData) => axios.post('http://localhost:3000/image', formData)