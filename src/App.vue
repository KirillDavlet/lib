<template>
  <div id="app">
    <div class="safe-area-inset safe-area-inset__top"></div>
    <div class="home">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Context, Module } from 'vuex-smart-module';
import { DeviceMutations } from '@/store/device/mutations';
import { DeviceActions } from '@/store/device/actions';
import { DeviceGetters } from '@/store/device/getters';
import { DeviceState } from './store/device/device.module';
import DeviceStore from '@/store/device/device.module';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

@Component({
  components: {}
})
export default class App extends Vue {
  @Watch('theme')
  onThemeChanged() {
    this.setTheme();
  }

  protected deviceStore!: Context<
    Module<DeviceState, DeviceGetters, DeviceMutations, DeviceActions>
  >;
  private throttleResize: any = throttle(() => {
    console.log('throttle');
    this.resizeWindow();
  }, 200);
  private debounceResize: any = debounce(() => {
    console.log('debounce');
    this.resizeWindow();
  }, 200);

  public beforeCreate() {
    this.deviceStore = DeviceStore.context(this.$store);
  }
  public created() {
    this.setTheme();
    window.addEventListener('resize', this.debounceResize);
    this.$store.dispatch('device/templateBreakpoints', window.innerWidth);
  }
  public beforeDestroy() {
    console.log('beforeDestroy');
    window.removeEventListener('resize', this.debounceResize);
  }

  public resizeWindow() {
    console.log('resized');
    this.$store.dispatch('device/templateBreakpoints', window.innerWidth);
  }
  public setTheme() {
    document.body.setAttribute('data-theme', this.theme);
  }

  get theme() {
    return this.deviceStore.state.theme;
  }
}
</script>
<style lang="sass">
@import "@/assets/styles/main.sass"
.home
  overflow-y: auto
</style>
