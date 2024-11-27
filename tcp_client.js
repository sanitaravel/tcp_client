// File: tcp_client.mjs

import net from 'net';

/**
 * Create and connect a TCP client to the specified host and port.
 * @param {string} host - The server hostname or IP address.
 * @param {number} port - The server port number.
 */
export function createTcpClient(host, port) {
    const client = new net.Socket();

    // Connect to the server
    client.connect(port, host, () => {
        console.log('Connected');
    });

    // Handle data received from the server
    client.on('data', (data) => {
        console.log(`Server says: ${data}`);
    });

    // Handle connection close
    client.on('close', () => {
        console.log('Connection closed');
    });

    // Handle errors
    client.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });

    return client; // Return the client instance for further use if needed
}
