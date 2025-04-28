import type { TaskStatus } from "../types/task.types";
import { TaskStatuses } from "../constants/task.constants";

export const useStatusColor = (status: TaskStatus) => {
    switch (status) {
        case TaskStatuses.new:
            return { fontColor: "#4287f5", bgColor: "#e8f1ff" };
        case TaskStatuses.inProgress:
            return { fontColor: "#f5b642", bgColor: "#fff0de" };
        case TaskStatuses.done:
            return { fontColor: "#f54260", bgColor: "#fad4d4" };
        default:
            return { fontColor: "#000", bgColor: "#fff" };
    }
};
