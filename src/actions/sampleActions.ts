"use server";

export const createTask = async (taskId: number, formData: FormData) => {
  // DB にタスクを作成する
  console.log("Create Task!");
	console.log(formData.get("name"));
	console.log(taskId);
};
