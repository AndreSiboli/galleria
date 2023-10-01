import axios from 'axios';

interface ImagesTypes {
    id: number;
    image: string;
    alt: string;
}

export function getImages(query: string, page: number) {
    const config = {
        headers: {
            Authorization: '4P5ghvUeZiJOl8Vrpk10umbzpvtvdEDahO7EJih2o0bNluaS2LxriCjI',
        },
    };

    const request = axios
        .get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=30`, config)
        .then(({ data }) => {
            const allImages: ImagesTypes[] = [];

            data.photos.forEach((item: any) => {
                console.log(item);
                allImages.push({ id: item.id, image: item.src.large, alt: item.alt });
            });

            return allImages;
        })
        .catch((err) => {
            console.log('Falha ao se conectar com a Api');
        });

    return request;
}
