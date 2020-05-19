import { Component, Vue, Prop } from 'vue-property-decorator';
import { TheMask } from 'vue-the-mask';
import SvgIcon from '@/components/Icons/SvgIcon.vue';
import AbstractInput from '../AbstractInput';
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Obligatory field'
});

@Component({
  name: 'Input',
  components: {
    TheMask,
    SvgIcon,
    ValidationProvider
  }
})
export default class Input extends AbstractInput {
  @Prop({ type: [Object, String], default: '' }) rules!: any;
  @Prop({ default: true }) hasRules!: boolean;

  public mounted() {
    const el: any = this.$refs.input;
    this.inputEl = el instanceof Vue ? el.$el : el;
    if (this.inputEl) {
      this.inputEl.addEventListener('animationstart', this.animationStart);
    }
  }
  public beforeDestroy() {
    if (this.inputEl) {
      this.inputEl.removeEventListener('animationstart', this.animationStart);
    }
  }

  public animationStart(e: any) {
    switch (e.animationName) {
      case 'autofill':
        return (this.isAutoFill = true);
    }
  }

  get styleIcon() {
    return {
      position: 'absolute',
      left: this.type == 'search' ? '1.5rem' : '',
      right: this.type != 'search' ? '1.8rem' : '',
      top: '1.4rem'
    };
  }
  get scgSearch(): any {
    return {
      name: 'search',
      style: this.styleIcon,
      size: '17',
      color: '#C3D6E0'
    };
  }
}
