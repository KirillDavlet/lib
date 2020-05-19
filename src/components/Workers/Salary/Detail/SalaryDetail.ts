import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import PageHeader from '@/components/PageHeader.vue';
import PageControls from '@/components/PageControls.vue';
import WorkerModel from '@/models/Workers/WorkerModel';
import Dropdown from '@/components/Buttons/Dropdown/Dropdown.vue';
import ButtonSort from '@/components/Buttons/ButtonSort.vue';
import SalaryShift from '@/models/Workers/Salary/SalaryShift';
import SalaryPayment from '@/models/Workers/Salary/SalaryPayment';
import PeriodFilter from '@/components/Workers/PeriodFilter.vue';
import Payments from './Payments/Payments.vue';
import Pay from './Pay/Pay.vue';
import Shifts from './Shifts/Shifts.vue';

@Component({
  components: {
    PageHeader,
    PageControls,
    Dropdown,
    ButtonSort,
    PeriodFilter,
    Payments,
    Pay,
    Shifts
  }
})
export default class SalaryDetail extends Vue {
  @Prop() from!: string;
  @Prop() to!: string;
  @Prop() periodMode!: string;
  @Prop() cafeId!: number;
  @Prop() cafeName!: string;
  @Prop() worker!: WorkerModel;
  @Prop() shifts!: SalaryShift[];
  @Prop() payments!: SalaryPayment[];
  @Prop({ default: () => [] }) balance!: any[];
  @Prop({ default: () => ['payments', 'shifts', 'pay'] })
  availableViews!: string[];

  @Emit('periodUpdated')
  periodUpdated(data: any) {
    return data;
  }
  @Emit('update:from')
  updateFrom(value: string) {
    return value;
  }
  @Emit('update:to')
  updateTo(value: string) {
    return value;
  }
  @Emit('update:periodMode')
  updatePeriodMode(value: string) {
    return value;
  }

  public dataResolved: boolean = false;
  public activeView: string = 'payments';

  public async created() {}

  get _from() {
    return this.from;
  }
  set _from(value: string) {
    this.updateFrom(value);
  }
  get _to() {
    return this.to;
  }
  set _to(value: string) {
    this.updateTo(value);
  }
  get _periodMode() {
    return this.periodMode;
  }
  set _periodMode(value: string) {
    this.updatePeriodMode(value);
  }
}
