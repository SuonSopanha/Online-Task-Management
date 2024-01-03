// Function to get the start and end dates of the current week
const getThisWeekRange = () => {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);
    return { startOfWeek, endOfWeek };
  };
  
  // Function to get the start and end dates of the current month
  const getThisMonthRange = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return { startOfMonth, endOfMonth };
  };
  
  // Filter tasks for today
  const filterTasksForToday = (tasks) => {
    const today = new Date().toLocaleDateString();
    return tasks.filter((task) => task.assignee_dates === today);
  };
  
  // Filter tasks for this week
  const filterTasksForThisWeek = (tasks) => {
    const { startOfWeek, endOfWeek } = getThisWeekRange();
    return tasks.filter((task) => {
      const assigneeDate = new Date(task.assignee_dates);
      return assigneeDate >= startOfWeek && assigneeDate <= endOfWeek;
    });
  };
  
  // Filter tasks for this month
  const filterTasksForThisMonth = (tasks) => {
    const { startOfMonth, endOfMonth } = getThisMonthRange();
    return tasks.filter((task) => {
      const assigneeDate = new Date(task.assignee_dates);
      return assigneeDate >= startOfMonth && assigneeDate <= endOfMonth;
    });
  };

  const filterByTeam = (task) =>{
    return task.filter((task) => task.project_id !== null);
  }

  const filterByOnlyMe = (task) =>{
    return task.filter((task) => task.project_id === null);
  }


  export {
    filterTasksForToday,
    filterTasksForThisWeek,
    filterTasksForThisMonth,
    filterByOnlyMe,
    filterByTeam
  };