import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import i18n from '@/i18n/i18n.ts';
import '@/utils/vee-validate';
import momentModule, { momentFilter } from '@/utils/moment';
import { phoneFilter, round } from './utils/filters';
import VueCurrencyFilter from 'vue-currency-filter';
import currencyModule from './utils/currency';
import BreakPointMixin from '@/mixins/BreakPointMixin';

//MOMENT
momentModule.setLocale(store.state.device.lang);
momentModule.setTimezone(store.state.auth.timezone);

//FILTERS
Vue.filter('moment', momentFilter);
Vue.filter('phone', phoneFilter);
Vue.filter('round', round);
Vue.use(
  VueCurrencyFilter,
  currencyModule.getConfig(store.state.device.currency)
);

//MIXINS
Vue.mixin(BreakPointMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
