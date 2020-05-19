<template>
  <div
    class="notification"
    :class="status ? `notification_${status}` : `notification_info`"
  >
    <div class="notification_icon-wrapper">
      <div
        class="icon"
        :class="status ? `icon_tooltip__${status}` : `icon_tooltip__info`"
      ></div>
    </div>
    <div class="notification_text">
      {{ text }}
      <slot></slot>
    </div>
    <svg-icon class="notification_close-btn" name="close" @click="close" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NotificationModel } from '@/models/NotificationModel';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

@Component({
  components: {
    SvgIcon
  }
})
export default class PushNotice extends Vue {
  @Prop() item!: NotificationModel;
  @Prop() text!: string;
  @Prop() status!: string;
  @Prop() timeout!: number;

  public created() {
    setTimeout(() => {
      this.close();
    }, this.timeout);
  }

  public close() {
    this.$store.commit('device/removeNotification', this.item);
  }
}
</script>
