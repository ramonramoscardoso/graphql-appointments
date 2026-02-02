import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";
import path from "node:path";
import { CustomersResolver } from "./resolvers/customers-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver, CustomersResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀 HTTP server running on ${url}`);
}

bootstrap();
