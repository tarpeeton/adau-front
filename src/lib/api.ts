import axios from 'axios';

// Define the function to send the POST request
export async function sendButtonCount(button: string): Promise<void> {
    try {
        // Define the URL and query parameter
        const url = `https://api.adau-integration-crm.result-me.uz/api/count?button=${button}`;

        // Define the headers including the API key
        const headers = {
            'Api-Key':'VJs4krbxFMj78Q5IsUIkdZdi8A1MSItugxlHJiwRALyE7c8lCiGcLY6OsugGPzRmjSJ3nzdFh6iUZD9lmYeSzPpm7FTwcGttS0js',
            'Content-Type': 'application/json',
        };

        // Send the POST request
        const response = await axios.post(url, {}, { headers });

        // Log the response (or handle it as needed)
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error sending the POST request:', error);
    }
}
