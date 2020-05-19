import { Component, Vue, Emit, Watch, Prop } from 'vue-property-decorator';
import Dropdown from '@/components/Buttons/Dropdown/Dropdown.vue';
import ButtonSort from '@/components/Buttons/ButtonSort.vue';
import SalarySummary from '@/models/Workers/Salary/SalarySummary';
import CafeModel from '@/models/CafeModel';
import PeriodFilter from '@/components/Workers/PeriodFilter.vue';

@Component({
  components: {
    Dropdown,
    ButtonSort,
    PeriodFilter
  }
})
export default class SalaryList extends Vue {
  @Prop() items!: SalarySummary[];
  @Prop() cafes!: CafeModel[];
  @Prop() from!: string;
  @Prop() to!: string;
  @Prop() periodMode!: string;
  @Prop({ default: false }) byUserMode!: boolean;

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
  @Emit('goDetail')
  goDetail({ cafeId, userId }: any) {
    return { cafeId, userId };
  }

  public sortBy: string | null = null;
  public sortDir: string | null = null;
  public filterCafe: any = null;

  public created() {}

  public resetFilters() {
    this.filterCafe = null;
    this.sortBy = null;
    this.sortDir = null;
  }
  public onChangeSort({ sortBy, sortDir }: any) {
    this.sortBy = sortBy;
    this.sortDir = sortDir;
  }

  get _items(): SalarySummary[] {
    let items = this.items;
    //FILTER BY CAFE
    if (this.filterCafe) {
      const cafeId = this.filterCafe.id;
      items = items.filter((i: SalarySummary) => i.cafeId == cafeId);
    }

    //SORT
    if (this.sortBy !== null && this.sortDir !== null) {
      const sortBy: any = this.sortBy;
      items.sort((a: any, b: any) => {
        if (a[sortBy] < b[sortBy]) {
          return this.sortDir == 'DESC' ? -1 : 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return this.sortDir == 'DESC' ? 1 : -1;
        }
        return 0;
      });
    }

    return items;
  }
  get _cafes(): CafeModel[] {
    let items = this.cafes;
    //FILTER BY CAFE
    if (this.filterCafe) {
      const cafeId = this.filterCafe.id;
      items = items.filter((i: CafeModel) => i.id == cafeId);
    }
    return items;
  }
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
