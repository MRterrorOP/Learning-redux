import { ADD_NEW_TASK } from "./constants";
import { TASK_INPUT_CHANGE } from "./constants";
export const setTaskInputField = (text) => {
  return {
    type: TASK_INPUT_CHANGE,
    payload: text,
  };
};

export const setNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    payload: task,
  };
};
