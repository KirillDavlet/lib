import { Subject, merge, Observable } from 'rxjs';
export class JobPermission {
  _isExpanded: boolean = true;
  id: number;
  parentId: number;
  name: string;
  slug: string;
  description: string;
  sort: number;
  checked: boolean;
  emmiter: Subject<JobPermission>;
  private observables: Observable<JobPermission> | null = null;
  private items: JobPermission[] = [];

  constructor(params: any = {}) {
    this.id = params.id || 0;
    this.parentId = params.parentId || 0;
    this.name = params.name || '';
    this.slug = params.slug || '';
    this.description = params.description || '';
    this.sort = params.sort || 0;
    this.checked = params.checked || false;
    this.emmiter = new Subject();
  }
  public toJSON(): Object {
    let obj = Object.assign(this);
    delete obj.emmiter;
    delete obj.observables;
    delete obj.items;
    return obj;
  }
  public registerObservables(items: JobPermission[]) {
    this.items = items;
    this.observables = merge(
      ...this.childs.map((i: JobPermission) => i.emmiter)
    );
    this.observables.subscribe((item: JobPermission) => {
      const unchecked = this.childs.every((i: JobPermission) => !i.checked);
      this._checked = !unchecked;
    });
  }
  public setAllChilds(value: boolean) {
    this.childs.forEach((i: JobPermission) => {
      i.checked = value;
      i.setAllChilds(value);
    });
  }

  get _checked() {
    return this.checked;
  }
  set _checked(value: boolean) {
    this.checked = value;
    this.emmiter.next(this);
  }
  get childs(): JobPermission[] {
    return this.items
      ? this.items.filter((i: JobPermission) => i.parentId == this.id)
      : [];
  }
  get indeterminateChecked() {
    const indeterminateChild: JobPermission | undefined = this.childs.find(
      (i: JobPermission) => i.indeterminateChecked
    );
    if (indeterminateChild) {
      return true;
    }
    const checkedLenght: number = this.childs.filter(
      (i: JobPermission) => i.checked
    ).length;
    return checkedLenght != 0 && checkedLenght != this.childs.length;
  }
}
