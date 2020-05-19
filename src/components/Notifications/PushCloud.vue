<template>
  <div class="notify-cloud">
    <PushNotice
      v-for="(item, index) in notifications"
      :key="`notify-${index}`"
      :item="item"
      :status="item.status"
      :timeout="item.timeout"
    >
      {{ item.text }}
    </PushNotice>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PushNotice from './PushNotice.vue';
import { NotificationModel } from '@/models/NotificationModel';
@Component({
  components: {
    PushNotice
  }
})
export default class PushCloud extends Vue {
  public text: string = '';

  get notifications(): NotificationModel[] {
    return this.$store.state.device.notifications;
  }
}
</script>
<style lang="sass">
.notify-cloud
  position: fixed
  top: 8rem
  right: 2rem
  width: 40rem
  height: auto
  display: flex
  flex-direction: column
  justify-content: stretch
  .notification
    width: 100%
    min-height: 5rem
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-content: flex-start
    padding: 1.5rem
    margin-bottom: 1rem
    background-color: var(--bg-hover)
    border-left: .2rem solid var(--primary)
    &_success
      border-left: .2rem solid var(--success)
    &_info
      border-left: .2rem solid var(--primary)
    &_danger
      border-left: .2rem solid var(--error)
    &_icon-wrapper
      margin-right: 1.5rem
    &_close-btn
      margin-left: 1.5rem
      cursor: pointer
    &_text
      font-size: $body-font
      color: var(--font-color)
      flex: 1 1
</style>
