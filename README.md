<a href="https://nodejs-production-5a75.up.railway.app/">Click here to visit hosted API</a>
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

<h2>Assuming your Node.js server is running on http://localhost:3000, follow these steps: </h2>

1. Open Postman.
2. Select the "POST" request method.
3. Enter the URL: http://localhost:3000/ticket.
4. In the "Headers" section, add a Content-Type header with the value application/json.
5. In the "Body" section, select the "raw" option and choose "JSON (application/json)" from the dropdown.
6. Add the following JSON data in the request body:

```
json
{
  "user_id": "#1",
  "issue": "Network connectivity issue"
}
```
8. Click the "Send" button to send the POST request.
9. You should receive a response similar to:
```
json
{
  "message": "Ticket created and assigned successfully.",
  "success": true,
  "data": {
    "ticket_id": 1,
    "assigned_to": "#1"
  }
}
```
10. This indicates that the ticket was successfully created and assigned to a person based on the Round Robin principle.
11. You can repeat the process to create and assign more tickets, changing the "user_id" and "issue" values in the JSON request body as needed.
