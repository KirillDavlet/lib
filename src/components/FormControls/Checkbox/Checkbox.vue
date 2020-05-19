<template>
  <label class="checkbox" :class="{ 'checkbox-disabled': disabled }">
    <input
      :disabled="disabled"
      type="checkbox"
      class="checkbox__input"
      :class="disabled ? `checkbox__input_disabled` : ``"
      :name="name"
      v-model="_value"
      @change="change"
      @input="input"
      @focus="focus"
      @blur="blur"
    />
    <div class="checkbox-box">
      <div class="checkbox-box__icon">
        <SvgIcon
          :size="breakPoint == 'mobile' ? 15 : 18"
          v-bind="styleIcon"
          :titleF="false"
          :name="_value ? 'CheckboxChecked' : 'Checkbox'"
          :color="hasError ? 'var(--error)' : '#DADADA'"
        />
      </div>
      <span>{{ $t(label) }}</span>
    </div>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  name: 'Checkbox',
  components: {
    SvgIcon
  }
})
export default class Checkbox extends Vue {
  @Prop() name!: string;
  @Prop() value!: boolean;
  @Prop() label!: string;
  @Prop() disabled!: boolean;
  @Prop() hasError!: boolean;

  @Emit('change')
  change(e: any) {
    if (!this.disabled) {
      return this.$emit('input', this.value);
    }
  }
  @Emit('input')
  input(e: any) {
    return e.target.checked;
  }
  @Emit('focus')
  focus(e: FocusEvent) {
    return e;
  }
  @Emit('blur')
  blur(e: any) {
    return e;
  }
  @Emit('update:value')
  updateValue(data: boolean) {
    return data;
  }

  get breakPoint() {
    return this.$store.state.device.breakPoint;
  }
  get styleIcon() {
    if (this.disabled) {
      return {
        color: 'var(--font-disabled)',
        hoverColor: 'var(--font-disabled)'
      };
    } else {
      return {
        color: 'var(--font-color)',
        hoverColor: 'var(--font-color)'
      };
    }
  }
  get _value() {
    return this.value;
  }
  set _value(data) {
    this.updateValue(data);
  }
}
</script>
<style lang="sass" scoped>
.checkbox
  cursor: pointer
  padding: 0
  user-select: none
  line-height: initial
  &__input
    position: absolute
    visibility: hidden
    width: 2rem
    height: 2rem
    margin: 0 !important
  &-box
    display: flex
    align-items: center
    > span
      margin-left: 1.2rem
      font: '$body-font'
      color: var(--font-color)
    &__icon
      position: relative
      display: flex
      justify-content: center
      align-items: center
      &:hover:after
        position: absolute
        content: ''
        width: 4rem
        height: 4rem
        background: var(--bg-radio)
        border-radius: 50%
    @include breakpoint(tablet)
      > span
        font: $body-font-tb
    @include breakpoint(mobile)
      > span
        font: $h1-style-mb
      &__icon
        &:hover:after
          width: 3.2rem
          height: 3.2rem
  &.checkbox-disabled
    cursor: default
    .checkbox-box
      > span
        color: var(--font-disabled)
      &__icon:after
        content: none
</style>
