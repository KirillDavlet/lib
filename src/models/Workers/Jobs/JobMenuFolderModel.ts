import { MenuFolderModel } from '@/models/Menu/MenuFolderModel';
import { Subject, merge, Observable } from 'rxjs';
import { JobMenuPositionModel } from './JobMenuPositionModel';

export class JobMenuFolderModel extends MenuFolderModel {
  _isExpanded: boolean;
  checked: boolean;
  reward: RewardConditionMenu;
  emmiter: Subject<JobMenuFolderModel>;
  private observables: Observable<
    JobMenuFolderModel | JobMenuPositionModel
  > | null;
  private menu: [JobMenuFolderModel | JobMenuPositionModel] | null;

  constructor(params?: any) {
    super(params);
    this._isExpanded = false;
    this.checked = true;
    this.reward = { amountType: 'percent', amount: null };
    this.emmiter = new Subject();
    this.observables = null;
    this.menu = null;
  }

  public registerObservables(
    menu: [JobMenuFolderModel | JobMenuPositionModel]
  ) {
    this.menu = menu;
    this.observables = merge(
      ...this.childs.map(
        (i: JobMenuFolderModel | JobMenuPositionModel) => i.emmiter
      )
    );
    this.observables.subscribe(
      (item: JobMenuFolderModel | JobMenuPositionModel) => {
        const unchecked = this.childs.every((i: any) => !i.checked);
        this._checked = !unchecked;
      }
    );
  }
  public toJSON(): Object {
    let obj = Object.assign(this);
    delete obj.emmiter;
    delete obj.observables;
    delete obj.menu;
    return obj;
  }
  public setAllChilds(value: boolean) {
    this.childs.forEach((i: JobMenuFolderModel | JobMenuPositionModel) => {
      if (i instanceof JobMenuFolderModel) {
        i.checked = value;
        i.setAllChilds(value);
      } else {
        i.checked = value;
      }
    });
  }
  public setRewardAmountTypeChilds(value: string) {
    this.childs
      .filter(
        (i: JobMenuFolderModel | JobMenuPositionModel) =>
          i instanceof JobMenuFolderModel && i.checked
      )
      .forEach((i: JobMenuFolderModel) => {
        i._rewardAmountType = value;
      });
  }
  public setRewardAmountChilds(value: number | null) {
    this.childs
      .filter(
        (i: JobMenuFolderModel | JobMenuPositionModel) =>
          i instanceof JobMenuFolderModel && i.checked
      )
      .forEach((i: JobMenuFolderModel) => {
        i._rewardAmount = value;
      });
  }

  get _rewardAmountType() {
    return this.reward.amountType;
  }
  set _rewardAmountType(value: string) {
    this.reward.amountType = value;
    this.setRewardAmountTypeChilds(value);
  }
  get _rewardAmount() {
    return this.reward.amount;
  }
  set _rewardAmount(value: number | null) {
    this.reward.amount = value;
    this.setRewardAmountChilds(value);
  }
  get _checked() {
    return this.checked;
  }
  set _checked(value: boolean) {
    this.checked = value;
    this.emmiter.next(this);
  }
  get childs(): any[] {
    return this.menu
      ? this.menu.filter(
          (i: JobMenuFolderModel | JobMenuPositionModel) =>
            i.parentFolderId == this.id
        )
      : [];
  }
  get indeterminateChecked() {
    const indeterminateChild: JobMenuFolderModel = this.childs.find(
      (i: JobMenuFolderModel | JobMenuPositionModel) =>
        i instanceof JobMenuFolderModel && i.indeterminateChecked
    );
    if (indeterminateChild) {
      return true;
    }
    const checkedLenght: number = this.childs.filter(
      (i: JobMenuFolderModel | JobMenuPositionModel) => i.checked
    ).length;
    return checkedLenght != 0 && checkedLenght != this.childs.length;
  }
}

interface RewardConditionMenu {
  amount: number | null;
  amountType: string;
}
