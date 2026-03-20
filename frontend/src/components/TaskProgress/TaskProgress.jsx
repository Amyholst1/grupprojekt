import "./TaskProgress.css";

function TaskProgress({ tasks }) {
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="task-progress">
      {completedCount} of {tasks.length} tasks completed
    </div>
  );
}

export default TaskProgress;
