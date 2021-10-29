import { gql } from 'apollo-server-express';

const personSchema = gql`
    type Query {
        person: String
    }
`;
export default personSchema;
