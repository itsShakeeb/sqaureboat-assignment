import { lazy } from "react";
const Home = lazy(() => import("./views/pages/Home"));
const Login = lazy(() => import("./views/pages/Login"));
const PostedJobs = lazy(() => import("./views/pages/PostedJobs"));

const routes = [
  {
    path: "/home",
    name: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: Login,
  },
  {
    path: "/posted-jobs",
    name: "PostedJobs",
    exact: true,
    component: PostedJobs,
  },
];

export default routes;
