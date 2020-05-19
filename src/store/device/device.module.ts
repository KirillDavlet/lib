import { DeviceActions } from './actions';
import { DeviceMutations } from './mutations';
import { DeviceGetters } from './getters';
import { Module } from 'vuex-smart-module';
import { NotificationModel } from '@/models/NotificationModel';

export class DeviceState {
  onLine: boolean = navigator.onLine || true;
  navbarTitle: string = '';
  theme: string = 'dark';
  lang: string = 'ru';
  currency: string = 'RUB';
  menuOpen: boolean = false;
  notifications: NotificationModel[] = [];
  loading: number = 0;
  breakPoint: string = 'desktop';
}

export default new Module({
  namespaced: true,
  state: DeviceState,
  actions: DeviceActions,
  mutations: DeviceMutations
});
