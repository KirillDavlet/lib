export default class MenuItemModel {
  icon: string;
  name: string;
  link: string;
  routeName: string;
  routeParams: Object | null;
  permission: string;
  items: MenuItemModel[];
  expanded: boolean;
  active: boolean;
  childsActive: boolean;
  disabled: boolean;

  constructor(params: any = {}) {
    this.icon = params.icon || '';
    this.name = params.name || '';
    this.link = params.link || '';
    this.routeName = params.routeName || '';
    this.routeParams = params.routeParams || null;
    this.permission = params.permission || '';
    this.items = params.items
      ? params.items.map((i: any) => new MenuItemModel(i))
      : [];
    this.expanded = params.expanded || false;
    this.active = params.active || false;
    this.childsActive = params.childsActive || false;
    this.disabled = params.disabled || false;
  }
}
