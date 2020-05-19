import { Component, Vue, Prop } from 'vue-property-decorator';
import WorkerModel from '@/models/Workers/WorkerModel';
import Dropdown from '@/components/Buttons/Dropdown/Dropdown.vue';
import ButtonSort from '@/components/Buttons/ButtonSort.vue';
import SalaryShift from '@/models/Workers/Salary/SalaryShift';
import moment from 'moment-timezone';
import DateTimeMixin from '@/mixins/DateTimeMixin';

@Component({
  components: {
    Dropdown,
    ButtonSort
  },
  mixins: [DateTimeMixin]
})
export default class Shifts extends Vue {
  @Prop() items!: SalaryShift[];

  public data: any = null;
  public sortBy: string | null = null;
  public sortDir: string | null = null;
  public filterJob: any = null;
  public filterCafe: any = null;

  public resetFilters() {
    this.filterJob = null;
    this.filterCafe = null;
    this.sortBy = null;
    this.sortDir = null;
  }
  public onChangeSort({ sortBy, sortDir }: any) {
    this.sortBy = sortBy;
    this.sortDir = sortDir;
  }

  get _items() {
    let items = this.items;

    //FILTER BY JOB
    if (this.filterJob) {
      const jobId = this.filterJob.id;
      items = items.filter((i: SalaryShift) => i.roleId == jobId);
    }

    //SORT
    if (this.sortBy !== null && this.sortDir !== null) {
      const sortBy: any = this.sortBy;
      items.sort((a: any, b: any) => {
        let sA = a[sortBy];
        let sB = a[sortBy];
        if (sortBy == 'start') {
          sA = moment.utc(sA).format('X');
          sB = moment.utc(sB).format('X');
        }
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
  get cafes() {
    return Array.from(
      new Set(this.items.map((x: SalaryShift) => x.cafeId))
    ).map((id: any) => {
      const item: any = this.items.find((i: SalaryShift) => i.cafeId == id);
      return { id: item.cafeId, name: item.cafeName };
    });
  }
  get jobs() {
    return Array.from(
      new Set(this.items.map((x: SalaryShift) => x.roleId))
    ).map((id: any) => {
      const item: any = this.items.find((i: SalaryShift) => i.roleId == id);
      return { id: item.roleId, name: item.roleName };
    });
  }
}
