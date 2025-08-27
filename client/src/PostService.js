import axios from "axios";
const url = "http://localhost:5000/api/posts/";

class PostService {
  //Get posts
  static async getPosts() {
    const res = await axios.get(url);
    const data = res.data;
    return data.map((post) => ({
      ...post,
      createdAt: new Date(post.createdAt),
    }));
  }

  // create posts
  static insertPost(text) {
    return axios.post(url, {
      text,
    });
  }

  // delete posts
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
