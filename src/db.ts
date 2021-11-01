import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import 'reflect-metadata';
import path from 'path';
import { Person } from './models/person';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

export const connectDb = () => {
    createConnection({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/models/*.ts'],
        synchronize: true,
        logging: true,
    })
        .then((connection) => {
            console.log('success', connection.isConnected);
            // const repo = connection.getRepository(Person);
            // Person.insert({ age: 50, name: 'test' });
            // here you can start to work with your entities
        })
        .catch((error) => console.log('error', error));
};
