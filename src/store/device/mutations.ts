import { Mutations } from 'vuex-smart-module';
import { DeviceState } from './device.module';
import { NotificationModel } from '@/models/NotificationModel';

export class DeviceMutations extends Mutations<DeviceState> {
  setNavbarTitle(value: string) {
    this.state.navbarTitle = value;
  }
  setTheme(value: string) {
    this.state.theme = value;
  }
  setOnline(value: boolean) {
    this.state.onLine = value;
  }
  toogleMenu(value: boolean) {
    this.state.menuOpen = value;
  }
  pushNotification(item: NotificationModel) {
    this.state.notifications.push(item);
  }
  removeNotification(item: NotificationModel) {
    const index = this.state.notifications.findIndex(
      (i: NotificationModel) => i._id == item._id
    );
    this.state.notifications.splice(index, 1);
  }
  startLoading() {
    this.state.loading++;
  }
  finishLoading() {
    if (this.state.loading) {
      this.state.loading--;
    }
  }
  clearLoading() {
    this.state.loading = 0;
  }
}
