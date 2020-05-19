import { DeviceState } from './device.module';
import { Actions } from 'vuex-smart-module';
import { DeviceMutations } from './mutations';
import { DeviceGetters } from './getters';
import { NotificationModel } from '@/models/NotificationModel';

export class DeviceActions extends Actions<
  DeviceState,
  DeviceGetters,
  DeviceMutations,
  DeviceActions
> {
  notify({ status, text, timeout }: any) {
    status = status || 'info';
    timeout = timeout || 6000;
    const item = new NotificationModel({ status, text, timeout });
    if (
      !this.state.notifications.find(
        (i: NotificationModel) => i.text == item.text
      )
    ) {
      this.mutations.pushNotification(item);
    }
  }
  public templateBreakpoints(width: any): void {
    if (width >= 1200) {
      this.state.breakPoint = 'desktop';
    } else if (width >= 960 && width < 1200) {
      this.state.breakPoint = 'laptop';
    } else if (width >= 720 && width < 960) {
      this.state.breakPoint = 'tablet';
    } else if (width >= 500 && width < 720) {
      this.state.breakPoint = 'phablet';
    } else {
      this.state.breakPoint = 'mobile';
    }
  }
}
