import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/macha/LoginPage.vue';
import AdminDashboard from '../pages/macha/AdminDashboard.vue';
import VehicleLogPage from '../pages/macha/VehicleLogPage.vue';
import VehicleAccessPage from '../pages/board/VehicleAccessPage.vue';
import AwsViewDetail from '../pages/board/AwsViewDetail.vue';
import PostCreatePage from '../pages/board/PostCreatePage.vue';
import PostEditPage from '../pages/board/PostEditPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/dashboard', component: AdminDashboard },
  { path: '/vehicle-logs', component: VehicleLogPage },
  { path: '/board/posts', component: VehicleAccessPage },
  { path: '/board/posts/:id', component: AwsViewDetail },
  { path: '/board/posts/new', component: PostCreatePage },
  { path: '/board/posts/:id/edit', component: PostEditPage },
];

export default createRouter({
  history: createWebHashHistory(), //history: createWebHistory(),
  routes,
});