import net from 'net';
import { promptUserInput } from './user_input_handler.js'; // Import the input handler module

// Function to start the TCP client
export function startClient(host, port) {
    const client = new net.Socket();

    // Connect to the server
    client.connect(port, host, () => {
        console.log(`Connected to server: ${host}:${port}`);
        promptUserInput(client); // Pass the client object to inputHandler
    });

    // Handle data from the server
    client.on('data', (data) => {
        console.log(`Server: ${data.toString()}`);
        promptUserInput(client); // Prompt user for next input after receiving server response
    });

    // Handle connection errors
    client.on('error', (err) => {
        console.error(`Connection error: ${err.message}`);
        process.exit(1); // Exit on connection error
    });

    // Handle the closing of the connection
    client.on('close', () => {
        console.log('Connection closed');
        process.exit(0); // Exit when the connection is closed
    });

    // Function to send data to the server
    client.sendData = function(message) {
        client.write(message, (err) => {
            if (err) {
                console.error(`Failed to send message: ${err.message}`);
            } else {
                console.log(`Message sent successfully: ${message}`);
            }
        });
    };

    // Function to close the connection
    client.closeConnection = function() {
        console.log('Closing connection...');
        client.end(); // Gracefully close the connection
    };
}
