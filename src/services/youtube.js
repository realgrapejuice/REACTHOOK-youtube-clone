class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async loadPopular() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=27&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log("error", error);
    }
  }

  async loadSearch(query) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=27&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log("error", error);
    }
  }
}

export default Youtube;
