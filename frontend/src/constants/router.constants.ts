export default class BaseRoutes {
    static readonly home = "/";
    static readonly users = "/users";

    static readonly createTask = BaseRoutes.home + "create";
    static readonly createUser = BaseRoutes.users + "/create";

    static singleUser(userId: string | number) {
        return BaseRoutes.users + `/${userId}`;
    }

    static editUser(userId: string | number) {
        return BaseRoutes.singleUser(userId) + `/edit`;
    }
}
