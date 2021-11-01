import { gql } from 'apollo-server-express';

const personSchema = gql`
    type Person {
        id: ID!
        name: String!
        age: Int!
        created_at: String!
    }

    type Query {
        getPeople: [Person]
    }

    type Mutation {
        addPerson(age: Int!, name: String!): Person
    }
`;
export default personSchema;
