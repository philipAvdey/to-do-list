import "./Task.scss";

import exit from "./assets/exit.svg";
import check from "./assets/check.svg";

interface Props {
  taskName: string;
  id: number;
  deleteTask: Function;
  completeTask: Function;
  taskStatus: boolean;
}

const Task = (props: Props) => {
  return (
    <>
      <div
        className={`app__task-list-item ${
          props.taskStatus ? "complete" : "incomplete"
        }`}
        key={`${props.taskName}-${props.id}`}
      >
        <div className="app__task-list-item_bullet-text">
          <span className="bullet-point"></span>
          <p>{props.taskName}</p>
        </div>
        <div className="app__task-list-item_buttons">
          <button onClick={() => props.deleteTask(props.id)}>
            <img src={exit} alt="x"></img>
          </button>
          <button onClick={() => props.completeTask(props.id)}>
            <img src={check} alt="check"></img>
          </button>
        </div>
      </div>
    </>
  );
};
export default Task;
