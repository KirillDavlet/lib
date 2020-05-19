<template>
  <div class="app-ui-kit">
    <div style="margin-left: 8rem; margin-top: 1rem" class="lang">
      <a href="#" @click="langChange('en')">en</a>
      <a href="#" @click="langChange('ru')">ru</a>
      <Avocado :value.sync="themeDark" />
    </div>
    <Navbar />
    <transition name="slide">
      <SidebarNew :items="menuItems" />
    </transition>
    <transition name="fade">
      <router-view :style="{ 'padding-left': paddingContent }" />
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navigation/Navbar.vue';
import MenuItemModel from '@/components/Navigation/Sidebar/MenuItemModel.ts';
import SidebarNew from '@/components/Navigation/Sidebar/SidebarNew.vue';
import Avocado from '@/components/FormControls/Avocado/Avocado.vue';
import { DeviceState } from '@/store/device/device.module';
import DeviceStore from '@/store/device/device.module';
import { Context, Module } from 'vuex-smart-module';
import { DeviceMutations } from '@/store/device/mutations';
import { DeviceActions } from '@/store/device/actions';
import { DeviceGetters } from '@/store/device/getters';

@Component({
  components: {
    Avocado,
    SidebarNew,
    Navbar
  }
})
export default class Layout extends Vue {
  public menu = [
    {
      icon: 'Market',
      name: 'Иконки',
      link: '/Icons',
      routeName: 'icons'
    },
    {
      icon: 'Burger',
      name: 'Табы',
      link: '/Tabs',
      routeName: 'tabs'
    },
    {
      icon: 'CheckboxChecked',
      name: 'элементы формы',
      items: [
        {
          name: 'кнопки',
          link: '/form/formElements/Buttons',
          routeName: 'form-formElements-Buttons'
        },
        {
          name: 'контроллеры',
          link: '/form/formElements/Inputs',
          routeName: 'form-formElements-Inputs'
        },
        {
          name: 'переключатель',
          link: '/form/formElements/Switchers',
          routeName: 'form-formElements-Switchers'
        }
      ]
    },
  ];
  public menuItems: MenuItemModel[] = [];
  protected deviceStore!: Context<
    Module<DeviceState, DeviceGetters, DeviceMutations, DeviceActions>
  >;

  public created() {
    this.deviceStore = DeviceStore.context(this.$store);
    this.menuItems = this.menu.map((i: any) => new MenuItemModel(i));
  }

  public langChange(locale: string) {
    this.$i18n.locale = locale;
  }

  get menuOpen() {
    return this.$store.state.device.menuOpen;
  }
  get paddingContent(): any {
    if (this.breakpoint('mobile')) {
      return '0';
    } else if (!this.breakpoint('desktop')) {
      return this.menuOpen ? '28rem' : '5.2rem';
    }
    return this.menuOpen ? '25.2rem' : '5.2rem';
  }
  get themeDark(): boolean {
    return this.deviceStore.state.theme == 'dark';
  }
  set themeDark(value: boolean) {
    this.deviceStore.mutations.setTheme(value ? 'dark' : 'light');
  }
}
</script>
<style lang="sass">
.app-ui-kit
  /*overflow-x: hidden*/
  /*overflow-y: auto*/
section.section
  padding: 1rem
h1
  margin-bottom: 1.5rem
.btn
  margin-bottom: $space-mid
.lang
  > a:not(:last-child)
    margin-right: 1rem
.page
  padding-right: 3rem
</style>
