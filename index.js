const express = require("express");
const bodyParser = require("body-parser");
const { people, tickets } = require("./data");

const app = express();

app.use(bodyParser.json());

let currentAssigneeIndex = 0;

function getNextAssignee() {
  const assignee = people[currentAssigneeIndex];
  currentAssigneeIndex = (currentAssigneeIndex + 1) % people.length;
  return assignee;
}

function assignTicketToPerson(ticketId) {
  const assignee = getNextAssignee();
  assignee.tickets_assigned.push(ticketId);
  return assignee.id;
}

app.post("/ticket", (req, res) => {
  const { user_id, issue } = req.body;

  if (!user_id || !issue) {
    return res.status(400).json({
      message: "Both user_id and issue are required.",
      success: false,
    });
  }

  const ticketId = tickets.length + 1;
  const assignedTo = assignTicketToPerson(ticketId);

  const ticket = {
    id: ticketId,
    issue_description: issue,
    assigned_to: assignedTo,
    raised_by: user_id,
  };

  tickets.push(ticket);

  return res.status(201).json({
    message: "Ticket created and assigned successfully.",
    success: true,
    data: {
      ticket_id: ticketId,
      assigned_to: assignedTo,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
