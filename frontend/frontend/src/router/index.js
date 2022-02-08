import { createRouter, createWebHistory } from "vue-router";
import Shark from '../components/Shark.vue'
import Games from '../components/Games.vue'

const routes = [
  {
    path : '/shark',
    name : 'Shark',
    component : Shark,
  },
  {
    path : '/games',
    name : 'Games',
    component : Games,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
