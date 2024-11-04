// endpoint: https://random-data-api.com/api/v2/users?size=100
// change users?size to desired size

// Fetch data from the API and display it in the console
// JSON data is fetched from the API and displayed in the console

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  address: string;
  phone_number: string;
}

async function fetchJSON(): Promise<void> {
    const url: string = "https://random-data-api.com/api/v2/users?size=2";
    try {
        const response: Response = await fetch(url);
        if (!response.ok) {
            throw new Error("Response status: ${response.status}");
        }
        const json: User[] = await response.json() as User[];
        console.log(json);
    } catch (error) {
        console.error("Error: ", error);
    }
}

fetchJSON();
