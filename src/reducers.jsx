import { ADD_NEW_TASK } from "./constants";
import { TASK_INPUT_CHANGE } from "./constants";
const initialTaskInputField = {
  TaskInputField: "",
};

export const taskReducer = (state = initialTaskInputField, action = {}) => {
  switch (action.type) {
    case TASK_INPUT_CHANGE:
      return Object.assign({}, state, { TaskInputField: action.payload });
    default:
      return initialTaskInputField;
  }
};

const initialTask = [
  {
    id: 0,
    inProgress: true,
    task: "",
  },
];

export const addTask = (state = initialTask, action = {}) => {
  switch (ADD_NEW_TASK) {
    case action.type:
      return Object.assign({}, state, {
        id: state[state.length - 1].id + 1,
        inProgress: true,
        task: action.payload,
      });
    default:
      return initialTask;
  }
};
