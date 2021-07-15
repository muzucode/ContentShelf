import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },  
  {
    path: "/shelves",
    name: "Shelves",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shelves/Shelves.vue"),
  },  
  {
    path: "/dev-tools",
    name: "Dev Tools",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views-dev/DevTools/DevTools.vue"),
  },
  {
    path: "/dev-tools/:shelf",
    name: "Dev Tools - :shelf",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views-dev/DevTools/DevTools.vue"),
  },
  {
    path: "/book/:id",
    name: "Book Item View",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Items/BookItemView.vue"),
  },
  {
    path: "/shelves/books",
    name: "Book Shelf",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shelves/BookShelfView.vue"),
  },
  {
    path: "/shelves/study",
    name: "Study Shelf",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shelves/StudyShelfView.vue"),
  },
  {
    path: "/shelves/study/:id",
    name: "Study Item View",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Items/StudyItemView.vue"),
  },
  {
    path: "/shelves/development",
    name: "Development Shelf",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shelves/DevelopmentShelfView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
