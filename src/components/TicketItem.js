import React from "react";

export default function TicketItem({ ticket, dispatch }) {
    const priorityClass = ticket.priority === "1" 
        ? "priority-low" 
        : ticket.priority === "2" 
        ? "priority-medium" 
        : "priority-high"; 

    return (
        <div className={`ticket-item ${priorityClass}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <div 
                className={`priority-dot priority-${ticket.priority}`}></div>
            <button onClick={() => dispatch({ type: "SET_EDITING_TICKET", payload: ticket })}>
                Edit
            </button>
            <button onClick={() => dispatch({ type: "DELETE_TICKET", payload: ticket.id })}>
                Delete
            </button>
        </div>
    );
}
