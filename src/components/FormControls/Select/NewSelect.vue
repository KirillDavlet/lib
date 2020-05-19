<template>
  <div
    class="new-select"
    :style="styleSelect"
    :class="{ 'active-select': isActive }"
  >
    <div
      class="new-select__form"
      :class="{
        'form-active': isActive,
        'label-active': labelActive,
        'small-select': small
      }"
      @click="isActive = !isActive"
    >
      <label v-if="!small">{{ $t(label) }}</label>
      <span v-if="activeEl != ''">{{ $t(activeEl) }}</span>
      <SvgIcon name="arrow" />
    </div>
    <div class="new-select__dropdown" v-if="isActive">
      <div
        class="new-select__dropdown-el"
        v-for="(el, i) in option"
        :key="`option-select-${i}`"
        @click="changeEl(el)"
      >
        <span>{{ $t(el) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Emit } from 'vue-property-decorator';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  name: 'NewSelect',
  components: {
    SvgIcon
  }
})
export default class NewSelect extends Vue {
  @Prop() option!: [];
  @Prop({ default: 'выберите язык' }) readonly label!: string;
  @Prop({ default: false }) small!: boolean;
  @Prop({ default: '' }) activeElDefault!: string;

  @Watch('isActive')
  flagModal(data: boolean) {
    if (data) {
      document.addEventListener('click', this.eventDocument, true);
    }
  }
  @Watch('activeEl')
  textLabel(data: string) {
    this.$emit('value', data);
  }

  public isActive: boolean = false;
  public activeEl: string = '';

  public eventDocument(): void {
    this.isActive = false;
    document.removeEventListener('click', this.eventDocument, true);
  }
  public changeEl(el: any): any {
    document.removeEventListener('click', this.eventDocument, true);
    this.isActive = false;
    this.activeEl = el;
  }

  public mounted() {
    if (this.activeElDefault && this.activeElDefault != '') {
      this.activeEl = this.activeElDefault;
    }
  }

  get styleSelect() {
    return { width: this.small ? '13.6rem' : '30rem' };
  }
  get labelActive() {
    return this.isActive || this.activeEl != '';
  }
}
</script>
<style lang="sass">
.new-select
  min-height: 4.3rem
  position: relative
  &__form
    width: 100%
    height: 4.3rem
    display: flex
    align-items: center
    justify-content: space-between
    padding: .85rem 3.2rem .85rem 1.6rem
    background: var(--bg-input)
    border-radius: 1rem 1rem 0 0
    position: relative
    &.small-select
      height: 3.6rem
      > span
        margin-top: 0
    > span
      margin-top: 1rem
      font: $body-font
      color: var(--font-active)
    > svg
      position: absolute
      right: 1.6rem
    > label
      color: var(--font-active)
      font-size: 1.4rem
      font-weight: normal
      pointer-events: none
      transition: .3s ease all
      max-width: 30rem
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
      opacity: .6
      position: absolute
      left: 1.6rem
      top: 1.5rem
    &:after
      content: ''
      height: .2rem
      width: 100%
      position: absolute
      bottom: 0
      left: 0
      background: var(--font-transparent)
      transition: .3s ease all
    &.form-active
      > label
        top: .2rem
        font-size: 1rem
      > svg
        transform: rotate(-180deg)
      &:after
        background: var(--primary)
    &.label-active
      > label
        top: .2rem
        font-size: 1rem
  &__dropdown
    position: absolute
    left: 0
    z-index: 30
    width: 100%
    max-height: 30rem
    overflow: auto
    min-height: 3rem
    display: flex
    flex-direction: column
    background: var(--bg-hover)
    box-shadow: 0 .5rem .6rem rgba(0, 0, 0, 0.2), 0 .3rem 1.6rem rgba(0, 0, 0, 0.12), 0 .9rem 1.2rem rgba(0, 0, 0, 0.14)
    border-radius: 0 0 1rem 1rem
    &-el
      width: 100%
      height: 4.4rem
      min-height: 4.4rem
      display: flex
      align-items: center
      justify-content: flex-start
      padding: 0 1.2rem
      &:hover
        background: rgba(98, 141, 255, 0.5)
      > span
        font: $body-font
        color: var(--font-active)
      &:last-child, &:first-child
        height: 4.8rem
</style>
