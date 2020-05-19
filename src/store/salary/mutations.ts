import { Mutations } from 'vuex-smart-module';
import { SalaryState } from './salary.module';
import CafeModel from '@/models/CafeModel';
import SalarySummary from '@/models/Workers/Salary/SalarySummary';

export class SalaryMutations extends Mutations<SalaryState> {
  setState({
    date,
    cafes,
    items
  }: {
    date: any;
    cafes: CafeModel[];
    items: SalarySummary[];
  }) {
    this.state.cafes = cafes;
    this.state.items = items;
    Object.assign(this.state.date, date);
  }
  setDate(data: any) {
    Object.assign(this.state.date, data);
  }
}
