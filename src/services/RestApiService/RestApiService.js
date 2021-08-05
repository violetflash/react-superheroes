//класс-сервис для инкапсуляции кода работы с API от остальных частей приложения
//Т.о. компоненты не будут знать, откуда к ним будут приходить данные,
// что в свою очередь упростит тестирование и поддержку кода работы с API
export default class RestApiService {

    //приватная часть класса. Не подлежит изменению снаружи
    _API_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
    _LS_KEY = 'heroesShortProps';

    async getResource(url) {
        const res = await fetch(`${this._API_URL}/${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url} - received ${res.status} status!`);

        return await res.json();
    }

    getAllData() {
        return this.getResource(`all.json`);
    }

    async saveAllRandDataToLS() {
        const heroes = await this.getAllData();
        const newArray = heroes.map(hero => this._extractShortProps(hero));
        localStorage.setItem(this._LS_KEY, JSON.stringify(newArray));
        return newArray;
    }

    getPerson(id) {
        return this.getResource(`id/${id}.json`);
    }

    getPowerStats(id) {
        return this.getResource(`powerstats/${id}.json`);
    }

    getAppearance(id) {
        return this.getResource(`appearance/${id}.json`);
    }

    getBiography(id) {
        return this.getResource(`biography/${id}.json`);
    }

    getConnections(id) {
        return this.getResource(`connections/${id}.json`);
    }

    getWork(id) {
        return this.getResource(`work/${id}.json`);
    }

    getImage(slug, size = 'lg') {
        return `${this._API_URL}/images/${size}/${slug}.jpg`;
    }

    _extractShortProps(hero) {
        return {
            id: hero.id,
            name: hero.name,
            fullName: hero.biography.fullName,
            image: this.getImage(hero.slug, 'md')
        };
    }
}
