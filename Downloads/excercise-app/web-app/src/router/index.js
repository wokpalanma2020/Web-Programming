import Vue from 'vue';
import VueRouter from 'vue-router';
import { User } from "../models/my-get";

import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Exercise from '../views/Exercise.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(User.User_Id == null){
        next( { name: "login" } )
      } else{
        next();
      }
    }
  },
  { path: '/login', name: 'login', component: Login},
  { path: '/signup', name: 'signup', component: Signup},
  { path: '/exercise', name: 'exercise', component: Exercise},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
