<template>
  <div
    class="small mb-20"
    :class="{ 'small-active': isActive, 'small-right': right }"
  >
    <input
      type="text"
      :style="{ textAlign: right ? 'right' : 'left' }"
      v-model="valueCopy"
      @change="change"
      @focus="isActive = true"
      @blur="isActive = false"
    />
    <span v-if="label && !right">{{ $t(label) }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
@Component({
  name: 'Small'
})
export default class Small extends Vue {
  @Prop() label!: string;
  @Prop() value!: any;
  @Prop({ default: false }) right!: boolean;

  @Emit('change')
  change(e: any) {
    return e.target.value;
  }
  @Emit('update:value')
  updateValue(data: any) {
    return data;
  }

  public isActive: boolean = false;
  get valueCopy() {
    return this.value;
  }

  set valueCopy(value: any) {
    this.updateValue(value);
  }
}
</script>
<style lang="sass">
.small
  width: 13.6rem
  height: 3.6rem
  display: flex
  align-items: center
  flex-wrap: nowrap
  background: rgba(27, 36, 40, 0.5)
  border-radius: 1rem 1rem 0 0
  position: relative
  padding: .8rem 1.2rem
  transition: 0.3s ease all
  &:after
    content: ''
    height: .2rem
    width: 100%
    bottom: 0
    position: absolute
    background: var(--font-transparent)
    left: 0
    transition: 0.3s ease all
  &.small-active
    &:after
      background: var(--primary)
    input,input:active,input:focus,input:hover,span
      color: var(--font-active)!important
  input,input:active,input:focus,input:hover,span
    background: transparent
    border: none
    outline: none
    font: $body-font
    color: var(--font-color)
  input
    width: 100%
    padding-right: .8rem
</style>
