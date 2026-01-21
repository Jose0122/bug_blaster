export const sortTickets = (tickets, preference) => {
    return [...tickets].sort((a, b) => {
      const priorityA = a.priority ? a.priority.toString() : ''; 
      const priorityB = b.priority ? b.priority.toString() : ''; 
  
      if (preference === "High to Low") {
        return priorityB.localeCompare(priorityA); 
      } else if (preference === "Low to High") {
        return priorityA.localeCompare(priorityB); 
      } else {
        return 0; 
      }
    });
  };
  