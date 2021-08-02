//класс-сервис для инкапсуляции кода работы с API от остальных частей приложения
//Т.о. компоненты не будут знать, откуда к ним будут приходить данные,
// что в свою очередь упростит тестирование и поддержку кода работы с API
export default class RestApiService {

    //приватная часть класса. Не подлежит изменению снаружи
    _API_URL='https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

    async getResource(url) {
        const res = await fetch(`${this._API_URL}/${url}`);
        if (!res.ok) throw new Error(`Could not fetch ${url} - received ${res.status} status!`);

        return await res.json();
    }

    getAllData() {
        return this.getResource(`all.json`);
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
}
