import * as fs from 'fs';
import csv from 'csv-parser';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    subscription: [];
    date_time: string;
}

async function fetchUsersFromCSV(filePath: string): Promise<User[]> {
    return new Promise((resolve, reject) => {
        const users: User[] = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                const user: User = {
                    id: parseInt(row.id),
                    first_name: row.first_name,
                    last_name: row.last_name,
                    email: row.email,
                    gender: row.gender,
                    subscription: JSON.parse(row.subscription),
                    date_time: row.date_time,
                };
                users.push(user);
            })
            .on('end', () => {
                resolve(users);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

fetchUsersFromCSV('./MOCK_DATA.csv').then(users => {
    users.forEach(user => {
        console.log(`User: ${user.first_name} ${user.last_name}`);
    });
}).catch(error => {
    console.error('Error reading CSV file:', error);
});