const { RESTDataSource } = require('apollo-datasource-rest');

class SongsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://cjvbui0tqi.execute-api.us-east-1.amazonaws.com/Prod/';
  }

  async getSongs() {
    console.log("came here")
    return this.get(`songs`);
  }

  // async getMostViewedMovies(limit = 10) {
  //   const data = await this.get('movies', {
  //     per_page: limit,
  //     order_by: 'most_viewed',
  //   });
  //   return data.results;
  // }
}
module.exports = SongsAPI;
