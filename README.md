# Node.js TCP Client

This project is a simple Node.js TCP client that connects to a server, sends messages, and receives responses. It uses the `net` module to manage the TCP connection and the `readline` module to interact with the user in the terminal. The client can gracefully close the connection when the user types `"exit"`.

## Features

- Connect to a server using TCP (IP address and port).
- Send messages to the server.
- Receive and display the server's response.
- Handle connection errors gracefully.
- Close the connection when the user types `"exit"`.

## Requirements

- Node.js (v14 or higher recommended)
- A TCP server running on a specified host and port

## Installation

To get started with this project, follow the steps below.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/sanitaravel/tcp_client
cd tcp-client
```

### Initialize the Project

If you haven't already, initialize the project using npm:

```bash
npm init -y
```

### Install Dependencies

This project doesn't have any external dependencies, as it relies on built-in Node.js modules (`net` and `readline`).

### Set Up Your Project Files

The project structure will look like this:

```
tcp-client/
├── main.js            # Entry point for the client
├── tcpClient.js       # Contains the TCP client logic
├── inputHandler.js    # Handles user input via readline
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

### Update `package.json`

Ensure that `"type": "module"` is set in your `package.json` to enable ES module syntax:

```json
{
  "type": "module"
}
```

## How to Run

1. Ensure you have the server running and know the host and port it is listening on.

2. In the terminal, run the client:

   ```bash
   node main.js
   ```

3. The client will prompt you to enter a message. Type a message and press `Enter` to send it to the server.

4. If you want to close the connection, type `exit` and press `Enter`. The client will gracefully close the connection.

## Example Interaction

### Client Interaction:
```
Connected to server
Enter message to send to server: Hello, Server!
Message sent successfully: Hello, Server!
Server: Hello, Client!
Enter message to send to server: exit
Closing connection...
Connection closed
```

## File Structure

```
tcp-client/
├── main.js            # Entry point for the client
├── tcpClient.js       # Contains the TCP client logic
├── inputHandler.js    # Handles user input via readline
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```
