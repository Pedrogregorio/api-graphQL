import User from "../../../models/User";

export default {
  Query: {
    getUsers: () => User.find(),
    getUser: async (_, { _id }) => User.findById(_id)
  },

  Mutation: {
    creteUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data } ) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  }
}