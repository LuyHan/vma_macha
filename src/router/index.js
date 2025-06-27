import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import AdminDashboard from '../pages/AdminDashboard.vue';
import VehicleLogPage from '../pages/VehicleLogPage.vue';
import VehicleAccessPage from '../pages/VehicleAccessPage.vue';
import AwsViewDetail from '../pages/AwsViewDetail.vue';
import PostCreatePage from '../pages/PostCreatePage.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: AdminDashboard },
  { path: '/vehicle-logs', component: VehicleLogPage },
  { path: '/vehicle-access', component: VehicleAccessPage },
  { path: '/posts/:id', component: AwsViewDetail },
  { path: '/posts/new', component: PostCreatePage },
];

export default createRouter({
  history: createWebHashHistory(), //history: createWebHistory(),
  routes,
});