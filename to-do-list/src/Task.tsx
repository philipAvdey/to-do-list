import "./Task.scss";

import exit from "./assets/exit.svg";

interface Props {
  taskName: string;
  id: number;
  deleteTask: Function;
}

const Task = (props: Props) => {
  return (
    <>
      <div
        className="app__task-list-item"
        key={`${props.taskName}-${props.id}`}
      >
        <div className="app__task-list-item_bullet-text">
          <span></span>
          <p>{props.taskName}</p>
        </div>
        <button onClick={() => props.deleteTask(props.id)}>
          <img src={exit} alt="x"></img>
        </button>
      </div>
    </>
  );
};
export default Task;
