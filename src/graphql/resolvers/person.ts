import { getConnection } from 'typeorm';
import { MutationAddPersonArgs, QueryResolvers } from '../../generated/graphql';
import { Person } from '../../models/person';

// QUERY and MUTATION RESOLVERS params
// accept four positional arguments: (parent, args, context, info)
// parent: The return value of the resolver for this field's parent
// args: An object that contains all GraphQL arguments provided for this field.
// context: An object shared across all resolvers that are executing for a particular operation. Use this to share per-operation state, including authentication information, dataloader instances, and anything else to track across resolvers.
// info: Contains information about the operation's execution state, including the field name, the path to the field from the root, and more.

const personResolvers = {
    Query: {
        getPeople: async () => {
            const repo = getConnection().getRepository(Person);
            const users = await repo.find({
                order: {
                    name: 'ASC',
                    id: 'DESC',
                },
            });
            return users;
        },
    },
    Mutation: {
        addPerson: async (_: any, { age, name }: MutationAddPersonArgs) => {
            const repo = getConnection().getRepository(Person);
            console.log({ age, name });
            const person = Person.create({ age, name });
            await repo.save(person);
            return person;
        },
    },
};
export default personResolvers;
