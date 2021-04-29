const { RESTDataSource } = require('apollo-datasource-rest');

class SongsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://cjvbui0tqi.execute-api.us-east-1.amazonaws.com/Prod/';
  }

  async getSongs() {
    return this.get(`songs`);
  }

  async orderBySong() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.song > b.song) ? 1 : -1);
  }

  async orderByArtist() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
  }

  async orderBySongReleaseDate() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.songReleaseDate > b.songReleaseDate) ? 1 : -1);
  }

  async orderByPlayCount() {
      const data = await this.get('songs');
      return data.sort((a, b) => (a.playCount > b.playCount) ? 1 : -1);
  }

  async metricA() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricA > b.metricA) ? 1 : -1);
  }

  async metricB() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricB > b.metricB) ? 1 : -1);
  }

  async metricC() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricC > b.metricC) ? 1 : -1);
  }

  async metricD() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricD > b.metricD) ? 1 : -1);
  }

  async metricE() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricE > b.metricE) ? 1 : -1);
  }

  async metricF() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricF > b.metricF) ? 1 : -1);
  }

  async metricG() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricG > b.metricG) ? 1 : -1);
  }

  async metricH() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricH > b.metricH) ? 1 : -1);
  }

  async metricI() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricI > b.metricI) ? 1 : -1);
  }

  async metricJ() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricJ > b.metricJ) ? 1 : -1);
  }

  async metricK() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricK > b.metricK) ? 1 : -1);
  }

  async metricL() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricL > b.metricL) ? 1 : -1);
  }

  async metricM() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricM > b.metricM) ? 1 : -1);
  }

  async metricN() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricN > b.metricN) ? 1 : -1);
  }

  async metricO() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricO > b.metricO) ? 1 : -1);
  }

  async metricP() {
    const data = await this.get('songs');
    return data.sort((a, b) => (a.metricP > b.metricP) ? 1 : -1);
  }
}
module.exports = SongsAPI;
