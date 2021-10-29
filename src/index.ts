import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
import { connectDb } from './db';

async function startServer() {
    const app = express();
    const httpServer = createServer(app);

    connectDb();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        validationRules: [depthLimit(10)],
        // reccomended if youre using apollo-server-express to shutdown server gracefully
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(compression());
    server.applyMiddleware({ app, path: '/graphql' });
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}

startServer();
