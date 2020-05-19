import { SalaryState } from './salary.module';
import { Actions } from 'vuex-smart-module';
import { SalaryMutations } from './mutations';
import { SalaryGetters } from './getters';
import { AxiosResponse, AxiosError } from 'axios';
import CafeModel from '@/models/CafeModel';
import SalarySummary from '@/models/Workers/Salary/SalarySummary';

export class SalaryActions extends Actions<
  SalaryState,
  SalaryGetters,
  SalaryMutations,
  SalaryActions
> {}

function prepareSalary(data: any) {
  const date = data.date;
  let cafes: CafeModel[] = [];
  let items: SalarySummary[] = [];
  data.salary.forEach((cafe: any) => {
    cafes.push(
      new CafeModel({
        id: cafe.cafeId,
        name: cafe.cafeName
      })
    );
    cafe.employees.forEach((salary: any) => {
      let addData = {
        cafeId: cafe.cafeId,
        cafeName: cafe.cafeName
      };
      items.push(new SalarySummary({ ...addData, ...salary }));
    });
  });

  return { date, cafes, items };
}
