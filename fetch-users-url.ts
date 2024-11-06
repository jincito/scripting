// endpoint: https://random-data-api.com/api/v2/users?size=100
// change users?size to desired size

// Fetch data from the API and display it in the console
// JSON data is fetched from the API and displayed in the console

interface User {
    id: number;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    address: string;
    phone_number: string;
    subscription: [];
}

async function fetchUsers(): Promise<User[]> {
    const url: string = "https://random-data-api.com/api/v2/users?size=2";
    const response: Response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const users: User[] = await response.json() as User[];
    return users;
}

fetchUsers().then(users => {
    users.forEach(users => {
        console.log(`User: ${users.first_name} ${users.last_name}`);
    });
});