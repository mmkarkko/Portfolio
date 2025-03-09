import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./projects/Projects.tsx";
import ProjectDetails from "./projects/ProjectDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
