import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import AdminDashboard from '../pages/AdminDashboard.vue';
import VehicleLogPage from '../pages/VehicleLogPage.vue';
import VehicleAccessPage from '../pages/VehicleAccessPage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: AdminDashboard },
  { path: '/vehicle-logs', component: VehicleLogPage },
  { path: '/vehicle-access', component: VehicleAccessPage },
];

export default createRouter({
  history: createWebHashHistory(), //history: createWebHistory(),
  routes,
});