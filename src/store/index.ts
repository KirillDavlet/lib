import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { Module, createStore } from 'vuex-smart-module';
import createPersistedState from 'vuex-persistedstate';
import DeviceStore from './device/device.module';
import SalaryStore from './salary/salary.module';

Vue.use(Vuex);

class StoreInstance {
  private static _instance: Store<any>;

  public static get Instance() {
    return (
      this._instance ||
      (this._instance = createStore(
        new Module({
          modules: {
            device: DeviceStore,
            salary: SalaryStore
          }
        }),
        {
          plugins: [
            createPersistedState({
              paths: ['device.theme'],
              reducer: (state: any, paths: string[]) => {
                return state;
              }
            })
          ]
        }
      ))
    );
  }
}

export default StoreInstance.Instance;
