<template>
  <div class="popup-page" v-if="_show">
    <div class="popup">
      <div class="popup-header"></div>
      <div class="popup-body">
        <slot name="body"></slot>
      </div>
      <div class="popup-footer">
        <slot name="footer"></slot>
        <button class="btn btn_secondary" @click="closeModal">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component } from 'vue-property-decorator';
import PopupEx from '@/components/Popup/Popup.ts';

@Component({})
export default class PopupPage extends PopupEx {}
</script>

<style lang="sass">
.popup-page
  position: fixed
  top: 6rem
  left: 0
  width: 100%
  height: auto
  display: flex
  flex-direction: column
  min-height: calc(100vh - 6rem)
  background: var(--bg-base)
  padding: 3.2rem 10rem
  z-index: 10
</style>
