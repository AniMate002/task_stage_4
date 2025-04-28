import type { User } from "./user.types";

export type TaskStatus = "new" | "in progress" | "done";

export interface Task {
    id: number;
    title: string;
    status: TaskStatus;
    user: User;
}
