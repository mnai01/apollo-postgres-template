import { Person } from '../../models/person';

const personResolvers: any = {
    Query: {
        person: () => {
            return 'person';
        },
    },
    // Mutation: {},
};
export default personResolvers;
