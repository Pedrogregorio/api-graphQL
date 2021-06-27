import Post from "../../../models/Post";
import User from "../../../models/User";

export default {
  Post: {
    author: (post) => User.findById(post.author),
  },

  Query: {
    getPosts: () => Post.find(),
    getPost: (_, { id }) => Post.findById(id),
  },

  Mutation: {
    cretePost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data } ) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  }
}