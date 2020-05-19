<template>
  <div
    class="toggler"
    :class="getClasses"
    @click.stop="!disabled ? updateValue(!value) : ''"
  >
    <div class="toggler__switch-wrap">
      <div
        class="toggler__switch toggler__switch"
        :class="value ? 'toggler__switch_on' : 'toggler__switch_off'"
      >
        <div
          class="toggler__switch-checkmark"
          :class="disabled ? 'checkmark-of' : 'checkmark-on'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Avocado'
})
export default class Avocado extends Vue {
  @Prop() value!: boolean;
  @Prop() classes!: string;
  @Prop({ default: false }) disabled!: boolean;

  @Emit('update:value')
  updateValue(value: boolean) {
    return value;
  }

  get getClasses(): any {
    return `${this.classes ? this.classes : ''} ${
      this.disabled ? 'toggler-disabled' : ''
    }`;
  }
}
</script>

<style lang="sass" scoped>
.toggler
  display: inline-block
  text-align: right
  &__switch-wrap
    display: flex
    align-items: center
  &__switch
    position: relative
    display: inline-block
    width: 3.4rem
    height: 1.4rem
    box-sizing: content-box
    cursor: pointer
    user-select: none
    background-clip: content-box
    border: none
    border-radius: 3.65rem
    &-checkmark
      position: absolute
      top: -.3rem
      left: 0.1rem
      width: 2rem
      height: 2rem
      background: #C3D6E0
      border-radius: 10rem
      box-shadow: 0 .1rem .3rem rgba(0, 0, 0, 0.4)
      border: .05rem solid rgba(0, 0, 0, 0.04)
      display: flex
      justify-content: center
      align-items: center
      &.checkmark-on:hover,&.checkmark-on:focus
        &:after
          position: absolute
          content: ''
          width: 4rem
          height: 4rem
          background: rgba(90, 129, 234, 0.12)
          z-index: 100
          border-radius: 50%
  &__switch_off
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.15)
    transition: border 0.4s, box-shadow 0.4s
    background: #32424A
    .toggler__switch-checkmark
      left: -.5rem
      transition: background-color 0.4s, left 0.2s
  &__switch_on
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 8px rgba(0, 0, 0, 0.15)
    transition: border 0.4s, box-shadow 0.4s, background-color 1.2s
    background: rgba(90, 129, 234, 0.38)
    .toggler__switch-checkmark
      left: 2rem
      transition: background-color 0.4s, left 0.2s
      background: #5A81EA
  &.toggler-disabled
    opacity: 0.4
    .toggler__switch
      cursor: auto
</style>
