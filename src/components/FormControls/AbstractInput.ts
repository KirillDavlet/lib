import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class AbstractInput extends Vue {
  @Prop() label!: string;
  @Prop() value: any;
  @Prop() placeholder!: string;
  @Prop() type!: string;
  @Prop() hasError!: boolean;
  @Prop() errorText!: string;
  @Prop({ default: false }) hasHelp!: boolean;
  @Prop() helpText!: string;

  @Emit('input')
  input(e: any) {
    return e.target ? e.target.value : e;
  }
  @Emit('focus')
  focus(e: FocusEvent) {
    this.isFocus = true;
    if (this.platform == 'android') {
      this.scroll();
    }
    return e;
  }
  @Emit('blur')
  blur(e: any) {
    this.isFocus = false;
    return e;
  }
  @Emit('update:value')
  updateValue(data: any) {
    return data;
  }

  public inputEl: any = null;
  public isFocus: boolean = false;
  public isAutoFill: boolean = false;

  public mounted() {}
  public beforeDestroy() {}

  public scroll() {
    if (this.isFocus) {
      setTimeout(() => {
        this.$el.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        });
      }, 1000);
    }
  }
  public focusInput() {
    const input: any = this.$refs.input;
    if (this.type == 'date' || this.type == 'datetime-local') {
      input.click();
    } else {
      input.focus();
    }
  }

  get valueCopy() {
    return this.value;
  }
  set valueCopy(value: any) {
    this.updateValue(value);
  }
  get placeholderCopy() {
    return this.placeholder && this.isFocus ? this.placeholder : '';
  }
  get platform() {
    return 'desktop';
  }
}
