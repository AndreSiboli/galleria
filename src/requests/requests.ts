import axios from 'axios';

export function getImages(query: string, page: number) {
    console.log(process.env.NEXT_PUBLIC_API)
    const config = {
        headers: {
            Authorization: '4P5ghvUeZiJOl8Vrpk10umbzpvtvdEDahO7EJih2o0bNluaS2LxriCjI',
        },
    };

    const request = axios
        .get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=30`, config)
        .then(({ data }): string[] => {
            const allImages: string[] = [];

            data.photos.forEach((item: any) => {
                allImages.push(item.src.large2x);
            });

            return allImages;
        })
        .catch((err) => {
            console.log('Falha ao se conectar com a Api');
        });

    return request;
}
