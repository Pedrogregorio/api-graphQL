import stratServer from "./start-server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

stratServer({ typeDefs, resolvers });