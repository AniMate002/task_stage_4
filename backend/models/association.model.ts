import Task from "./task.model.ts";
import User from "./user.model.ts";

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

export { User, Task };
