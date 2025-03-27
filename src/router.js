import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import ExpenseTracking from './views/ExpenseTracking.vue';
import BudgetManagement from './views/BudgetManagement.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/expenses', component: ExpenseTracking },
  { path: '/budget', component: BudgetManagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 


