import Config from "../Config";

class Api {
    constructor() {

    }

    async getHome() {
        const url = Config.host + '/api/home';
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
}

export default new Api();