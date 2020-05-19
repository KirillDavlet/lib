<template>
  <div class="popup-wrapper" v-if="_show">
    <div class="popup">
      <div class="popup-header">
        <p class="popup-header__text">
          {{ header ? header : 'Всплывающее окно' }}
        </p>
        <div class="popup-close" @click="closeModal"></div>
      </div>
      <div class="popup-body">
        <slot name="body"></slot>
      </div>
      <div class="popup-footer" v-if="footer">
        <slot name="footer"></slot>
        <button class="btn btn_secondary" @click="closeModal">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import PopupEx from '@/components/Popup/Popup.ts';

@Component
export default class Popup extends PopupEx {
  @Prop() classes!: string;
  @Prop() header!: string;
  @Prop({ default: true }) footer!: boolean;
}
</script>
<style lang="sass" scoped>
.popup-wrapper
  cursor: default
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 30000
  background: rgba(#000, .8)
  display: flex
  justify-content: center
  align-items: flex-start
.popup
  width: 55rem
  max-width: 55rem
  background: var(--bg-base)
  margin-top: 20rem
  display: block
  @include breakpoint(tablets)
    width: 100%
    height: 100%
    margin: 0
  @include breakpoint(phablets)
    width: 100%
    height: 100%
    margin: 0
  @include breakpoint(mobile)
    width: 100%
    height: 100%
    margin: 0
.popup-header
  background: var(--bg-secondary)
  height: 5rem
  padding-left: 2.5rem
  display: flex
  align-items: center
  justify-content: space-between
  &__text
    color: var(--font-transparent)
.popup-close
  width: 5rem
  height: 5rem
  display: flex
  justify-content: center
  align-content: center
  cursor: pointer
  background: $svg-close
  &:hover
    background: $svg-close_hover
.popup-body
  padding: 2rem 2rem 2rem 2.5rem
.popup-footer
  display: flex
  flex-direction: row-reverse
  padding: 0 2rem 2rem 2rem
  @include breakpoint(tablets)
    width: 100%
    margin: 0
    position: absolute
    bottom: 0
    padding: 0
    justify-content: space-evenly
  @include breakpoint(phablets)
    width: 100%
    margin: 0
    position: absolute
    bottom: 0
    padding: 0
    justify-content: space-evenly
  @include breakpoint(mobile)
    width: 100%
    margin: 0
    position: absolute
    bottom: 0
    padding: 0
    justify-content: space-evenly
  .btn
    @include breakpoint(tablets)
      margin: 0!important
      flex: 1 1
    @include breakpoint(phablets)
      margin: 0!important
      flex: 1 1
    @include breakpoint(mobile)
      margin: 0!important
      flex: 1 1
</style>
