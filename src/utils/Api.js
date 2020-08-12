import Config from "../Config";

class Api {

    async getHome() {
        const url = `${Config.HOST}/api/home`;
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log('data', data)
                if (data.success === false) {
                    return [];
                }
                // console.log('data.cities', data.cities)
                return data.cities;
            }
        );
    }

    async getCityHotels(city) {
        const url = `${Config.HOST}/api/hotels/city/${city}`;
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    return [];
                }
                return data;
            })
    }
}

export default new Api();