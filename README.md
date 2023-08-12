# Ticketing System API

Welcome to the Ticket System API! This API allows you to manage and assign incoming tickets to users based on the Round Robin principle.

## Installation

To run this API on your local machine, follow these steps:

1. Clone this repository to your local machine using Git:

   \`git clone https://github.com/your-username/ticket-system-api.git\`

2. Navigate into the project directory:

   \`cd ticketing-system\`

3. Install the required Node.js packages using npm:

   \`npm install\`

4. Start the API server:

   \`node index.js\`

5. The API server will start on http://localhost:3000 by default. You can access the API endpoints using a tool like Postman or by making HTTP requests.

## Usage

You can use the following endpoints to interact with the API:

### Create a Ticket

**Endpoint**: POST /ticket

**Request Body**:

\`\`\`json
{
  \"user_id\": \"#1\",
  \"issue\": \"Network connectivity issue\"
}
\`\`\`

This will create a new ticket and assign it to the next available person based on the Round Robin principle.

**Response**:

\`\`\`json
{
  \"message\": \"Ticket created and assigned successfully.\",
  \"success\": true,
  \"data\": {
    \"ticket_id\": 1,
    \"assigned_to\": \"#1\"
  }
}
\`\`\`
