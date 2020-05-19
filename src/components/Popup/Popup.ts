import { Vue, Prop, Emit } from 'vue-property-decorator';

export default class Popup extends Vue {
  @Prop() show!: boolean;

  @Emit('closeModal')
  closeModal() {
    this._show = false;
    return this._show;
  }
  @Emit('update:show')
  updateShow(value: boolean) {
    return value;
  }

  get _show() {
    return this.show;
  }
  set _show(value: boolean) {
    this.updateShow(value);
  }
}
