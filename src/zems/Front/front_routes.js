import FrontLayout from "./FrontLayout/FrontLayout.vue";
import AboutPage from "./Pages/AboutPage.vue";
import BlogPage from "./Pages/BlogPage.vue";
import HomePage from "./Pages/HomePage.vue";

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
    ],
  },
];
