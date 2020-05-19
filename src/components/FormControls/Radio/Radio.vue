<template>
  <label
    class="radio"
    :class="{ 'radio-disabled': disabled, 'active-radio': active }"
  >
    <input
      type="radio"
      class="radio__input"
      :name="name"
      :value="value"
      v-model="_selectedValue"
      :disabled="disabled"
    />
    <div class="radio-box">
      <div class="radio-box__icon">
        <SvgIcon
          :size="breakPoint == 'mobile' ? 16 : 20"
          v-bind="styleIcon"
          :titleF="false"
          :name="active ? 'radioSelected' : 'radio'"
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
  name: 'Radio',
  components: {
    SvgIcon
  }
})
export default class Radio extends Vue {
  @Prop() name!: string;
  @Prop() value!: boolean;
  @Prop() selectedValue!: boolean;
  @Prop() label!: string;
  @Prop({ default: false }) disabled!: boolean;

  @Emit('update:selectedValue')
  updateValue(data: boolean) {
    return data;
  }

  get active() {
    return this._selectedValue == this.value;
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
  get _selectedValue() {
    return this.selectedValue;
  }
  set _selectedValue(data) {
    this.updateValue(data);
  }
}
</script>
<style lang="sass" scoped>
.radio
  cursor: pointer
  padding: 0
  user-select: none
  position: relative
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
  &.radio-disabled
    cursor: default
    .radio-box
      > span
        color: var(--font-disabled)
      &__icon:after
        content: none
</style>
