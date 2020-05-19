import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import uiKit from './routes/ui-kit';

Vue.use(VueRouter);

const routes = [...uiKit];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: any) => {
  if (!to.name) {
    return next('/');
  }

  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    'about',
    'price',
    'setup',
    'team',
    'features',
    'fProfile',
    'fWorkers',
    'fCafes',
    'fInfopanel',
    'fSchedule',
    'fMenu',
    'fTariffs',
    'fStock',
    'fOdds',
    'fBudget',
    'fTables',
    'login',
    'recovery',
    'recovery-newpass',
    'privacy',
    'privacyAccept',
    'policy',
    'register',
    'register-complete',
    'email-confirm',

    'icons',
    'tabs',
    'form-formElements-Buttons',
    'form-formElements-Inputs',
    'form-formElements-Switchers',
    'log-in'
  ];

  //MIDDLEWARE
  if (to.meta.hasOwnProperty('middleware')) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
  }

  return next();
});
