import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({})
export default class AbstractControls extends Vue {
  @Prop() label!: string;
  @Prop() value: any;
  @Prop() placeholder!: string;
  @Prop() type!: string;
  @Prop() hasError!: boolean;
  @Prop() hasHelp!: boolean;
  @Prop() textError!: string;
  @Prop() textHelp!: string;
  @Prop({ default: '' }) readonly name!: string;
  @Emit('input')
  input(e: any) {
    return e.target ? e.target.value : e;
  }
  @Emit('focus')
  focus(e: FocusEvent) {
    this.isFocus = true;
    return e;
  }
  @Emit('blur')
  blur(e: any) {
    this.isFocus = false;
    return e;
  }
  get componentName(): string {
    return `controls-${this.name}`;
  }
  public isActive: boolean = false;
  public isFocus: boolean = false;
}
