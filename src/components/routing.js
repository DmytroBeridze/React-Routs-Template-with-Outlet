import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Users } from "./pages/Users";
import { About } from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "users", element: <Users /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);
export { router };
