import readline from 'readline';

// Set up the readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for input and send it to the server
export function promptUserInput(client) {
    rl.question('Enter message (write "exit" to close connection): ', (message) => {
        if (message.toLowerCase() === 'exit') {
            // If user enters 'exit', close the connection
            client.closeConnection();
            rl.close(); // Close the readline interface
        } else {
            // Otherwise, send the message to the server
            client.sendData(message);
        }
    });
}
