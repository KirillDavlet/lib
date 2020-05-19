import { Component, Vue } from 'vue-property-decorator';
import Breadcrumbs from '@/components/Navigation/Breadcrumbs/Breadcrumbs.vue';
import { BreadcrumbModel } from '@/components/Navigation/Breadcrumbs/BreadcrumbModel';
import Tabs from '@/components/Tabs/Tabs.vue';
import Tab from '@/components/Tabs/Tab.vue';
import Input from '@/components/FormControls/Input/Input.vue';
import Textarea from '@/components/FormControls/Textarea/Textarea.vue';
import Select from '@/components/FormControls/Select/Select.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';
import Radio from '@/components/FormControls/Radio/Radio.vue';
import { DeviceState } from '@/store/device/device.module';
import DeviceStore from '@/store/device/device.module';
import { Context, Module } from 'vuex-smart-module';
import { DeviceMutations } from '@/store/device/mutations';
import { DeviceActions } from '@/store/device/actions';
import { DeviceGetters } from '@/store/device/getters';
import Avocado from '@/components/FormControls/Avocado/Avocado.vue';
import svgIcon from '@/components/Icons/SvgIcon.vue';
import svgIconBase from '@/components/Icons/SvgIconBase.vue';
import buttonSort from '@/components/Buttons/ButtonSort.vue';

@Component({
  components: {
    Input,
    Breadcrumbs,
    Tabs,
    Tab,
    Textarea,
    Select,
    Checkbox,
    Radio,
    Avocado,
    svgIcon,
    svgIconBase,
    buttonSort
  }
})
export default class Demo extends Vue {
  public links: BreadcrumbModel[] = [
    {
      id: 'cafe-menu',
      name: 'Меню кафе'
    },
    {
      id: 'cafe-table',
      name: 'Стол'
    }
  ];

  public textInputVal: string = '';
  public selectValue: number = 0;
  public checkboxValue: boolean = false;
  public radioValue: number = 1;
  protected deviceStore!: Context<
    Module<DeviceState, DeviceGetters, DeviceMutations, DeviceActions>
  >;

  public created() {
    this.deviceStore = DeviceStore.context(this.$store);
  }

  get themeDark(): boolean {
    return this.deviceStore.state.theme == 'dark';
  }
  set themeDark(value: boolean) {
    this.deviceStore.mutations.setTheme(value ? 'dark' : 'light');
  }
}
