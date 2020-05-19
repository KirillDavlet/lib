import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BreakpointMixin extends Vue {
  public created() {
    this.breakpoint = (...arg: any): boolean => {
      return arg.some((i: any) => i == this._breakpoint);
    };
  }
  get _breakpoint(): string {
    return this.$store.state.device.breakPoint;
  }
}
