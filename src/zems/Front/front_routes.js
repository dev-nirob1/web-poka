import FrontLayout from "./FrontLayout/FrontLayout.vue";
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
    ],
  },
];
