import InputBox from "./Components/InputBox";
import { TaskDisplayer } from "./Components/TaskDisplayer";
import { ButtonBox } from "./Components/InputBox";
import { connect } from "react-redux";
import { setTaskInputField, setNewTask } from "./actions";
import { addTask } from "./reducers";

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setTaskInputField(event.target.value));

      // action is dispatch and it go to store first
      // then store forward it to the reducers
    },
    addTask: (task) => {
      dispatch(setNewTask(task));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    TaskInputField: state.taskReducer.TaskInputField,
    tasks: state.addTask,
  };
};

function App({ tasks, addTask, onSearchChange, TaskInputField }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[98%] glassEffect border-solid border-white border-opacity-60 my-[1vh] border-2  mx-auto bg-white bg-opacity-10 backdrop-blur-sm flex justify-center rounded shadow-2xl ">
        <h1 className="text-white">Task Manager</h1>
      </div>

      <TaskDisplayer />
      <InputBox
        name={"Task"}
        type={"text"}
        placeholder={"Task To add"}
        onChange={onSearchChange}
      />
      <ButtonBox funcToCall={addTask} task={TaskInputField} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
