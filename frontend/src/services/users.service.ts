import type { User } from "../types/user.types";

export const fetchUserService = async (): Promise<Array<User>> => {
    try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if ("error" in data) throw new Error(data.error);

        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";

        console.log("Error at fetchUserService: ", error);
        throw new Error(errorMessage);
    }
};

export const deleteUserService = async (
    userId: number
): Promise<{ message: string }> => {
    try {
        const res = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if ("error" in data) throw new Error(data.error);

        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";

        console.log("Error at deleteUserService: ", error);
        throw new Error(errorMessage);
    }
};

export const createUserService = async (
    name: string,
    email: string
): Promise<User> => {
    try {
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        });

        const data = await res.json();

        if ("error" in data) throw new Error(data.error);

        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";

        console.log("Error at createUserService: ", error);
        throw new Error(errorMessage);
    }
};

export const fetchSingleUserService = async (userId: number): Promise<User> => {
    try {
        const res = await fetch(`/api/users/${userId}`);
        const data = await res.json();

        if ("error" in data) throw new Error(data.error);

        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";

        console.log("Error at fetchSingleUserService: ", error);
        throw new Error(errorMessage);
    }
};

export const editUserService = async (
    name: string,
    email: string,
    id: number
): Promise<{ message: string; user: User }> => {
    try {
        const res = await fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        });

        const data = await res.json();

        if ("error" in data) throw new Error(data.error);

        return data;
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error!";

        console.log("Error at editUserService: ", error);
        throw new Error(errorMessage);
    }
};
