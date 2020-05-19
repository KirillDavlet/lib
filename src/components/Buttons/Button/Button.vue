<template>
  <div
    class="so__button"
    :class="{ 'btn-disabled': disabled }"
    @click="eventButton"
  >
    <router-link
      class="btn-link__no-secondary2"
      v-bind="Attribute"
      v-if="type != 'secondary2' && link"
      :to="disabled ? '#' : link"
    >
      <slot></slot>
      <span>{{ $t(label) }}</span>
    </router-link>
    <button v-else v-bind="Attribute" :disabled="disabled">
      <slot></slot>
      <router-link v-if="link" :to="disabled ? '#' : link">
        {{ $t(label) }}
      </router-link>
      <span v-else>{{ $t(label) }}</span>
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';

@Component({
  name: 'Button',
  components: {}
})
export default class Button extends Vue {
  @Prop({ default: false }) big!: boolean; // большая/маленькая кнопка
  @Prop({ default: 'primary' }) type!: string; // цвет кнопки
  @Prop({ default: 'button' }) label!: string;
  @Prop({ default: false }) disabled!: string;
  @Prop({ default: '' }) link!: string;
  @Prop({ default: null }) width!: string | number;

  get classButton(): string {
    return `btn_${this.type}`;
  }
  get ButtonBig(): string {
    if (this.big) {
      return 'btn btn__big';
    }
    return 'btn';
  }
  get btnDisabled(): string {
    return this.disabled ? 'btn-disabled' : '';
  }
  get Attribute(): any {
    return {
      class: [this.ButtonBig, this.classButton, this.btnDisabled].join(' '),
      style: {
        width: this.width ? this.width + 'rem' : '',
        maxWidth: this.big && !this.width ? '23rem' : ''
      },
      ...this.$attrs
    };
  }

  public eventButton(): any {
    this.$emit('eventButton');
  }
}
</script>
<style lang="sass">
.so__button
  position: relative
  > button, > .btn-link__no-secondary2
    > svg
      margin-right: 1rem
    > a, > span
      color: var(--font-active)
      text-transform: uppercase
  &.btn-disabled
    user-select: none
    &:after
      content: ''
      width: 100%
      height: 100%
      opacity: .5
      z-index: 10
      position: absolute
      top: 0
      left: 0
</style>
