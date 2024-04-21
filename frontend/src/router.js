import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from './components/MainComponent.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: MainComponent, 
  },
];

const router = new VueRouter({
  routes,
  mode: 'history' 
});

export default router;
