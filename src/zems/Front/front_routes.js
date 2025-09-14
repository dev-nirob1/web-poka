import FrontLayout from "./FrontLayout/FrontLayout.vue";
import AboutPage from "./Pages/AboutPage.vue";
import BlogDetails from "./Pages/BlogDetails.vue";
import BlogPage from "./Pages/BlogPage.vue";
import ContactPage from "./Pages/ContactPage.vue";
import HomePage from "./Pages/HomePage.vue";
import ProjectDetails from "./Pages/ProjectDetails.vue";
import ProjectsPage from "./Pages/ProjectsPage.vue";

export default [
  {
    path: "/",
    component: FrontLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "/about-us",
        name: "about-us",
        component: AboutPage,
      },
      {
        path: "/blogs",
        name: "blogs",
        component: BlogPage,
      },
      {
        path: "/blog/:slug",
        name: "blog-details",
        component: BlogDetails,
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: ContactPage,
      },
      {
        path: "/projects",
        name: "projects",
        component: ProjectsPage,
      },
      {
        path: "/project/:slug",
        name: "project-details",
        component: ProjectDetails,
      },
    ],
  },
];
