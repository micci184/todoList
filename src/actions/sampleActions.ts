"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  // DB にタスクを作成する
  console.log("Create Task!");
  console.log(formData.get("name"));
  console.log(taskId);
  state.error = "Occured Error!";
  return state;
};
