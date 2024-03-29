import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Users from "./components/Users/Users";

const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/profile", component: Profile },
    { path: "/users", component: Users }
];

export { routes };
