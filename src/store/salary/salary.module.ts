import { SalaryActions } from './actions';
import { SalaryMutations } from './mutations';
import { Module } from 'vuex-smart-module';
import SalarySummary from '@/models/Workers/Salary/SalarySummary';
import CafeModel from '@/models/CafeModel';

export class SalaryState {
  date: any = {
    from: '',
    to: '',
    periodMode: 'manual'
  };
  items: SalarySummary[] = [];
  cafes: CafeModel[] = [];
}

export default new Module({
  namespaced: true,
  state: SalaryState,
  actions: SalaryActions,
  mutations: SalaryMutations
});
