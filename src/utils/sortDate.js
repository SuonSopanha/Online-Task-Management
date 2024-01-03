

const sortDateAndTime = (array) => {
    let sortedArray = [];
    sortedArray = array.sort(function (a, b) {
      const compareDate = new Date(a.date) - new Date(b.date);
  
      if (compareDate === 0) {
        // Extract hours, minutes, and AM/PM from time and compare
        const [timeA, periodA] = a.time.split(" ");
        const [hoursA, minutesA] = timeA.split(":").map(Number);
  
        const [timeB, periodB] = b.time.split(" ");
        const [hoursB, minutesB] = timeB.split(":").map(Number);
  
        if (periodA !== periodB) {
          // Compare AM/PM
          return periodA === "AM" ? -1 : 1;
        }
  
        return hoursA - hoursB || minutesA - minutesB;
      }
  
      return compareDate;
    });
  
    return [...sortedArray].reverse();
};

export {sortDateAndTime};
