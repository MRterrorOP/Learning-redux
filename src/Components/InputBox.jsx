const InputBox = (props) => {
  return (
    <input
      className="bg-blue-100 h-[4vh] mx-auto p-1    rounded focus:outline focus:outline-2 hover:bg-blue-200 focus:outline-blue-500"
      {...props}
    />
  );
};

export const ButtonBox = ({ funcToCall, task }) => {
  return (
    <button
      className="bg-blue-500 h-[4vh] rounded md:w-[100px] w-[50px] my-2"
      onClick={() => {
        if (task !== "") {
          funcToCall(task);
        }
      }}
    >
      Add Task
    </button>
  );
};
export default InputBox;
