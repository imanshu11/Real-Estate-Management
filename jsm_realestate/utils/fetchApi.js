import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi= async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7001c9de35msh8654321cdceefdep18cadcjsn52ef3eecee23'
          }
    });

    return data;
}