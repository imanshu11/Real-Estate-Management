import axios from 'axios';


// BAYUT API
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7874fc0f8emsh8b0017dd2f547bap1d3efbjsn9b12a42ddc0e'}

    })

    return data
}

