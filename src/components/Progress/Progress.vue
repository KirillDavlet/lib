<template>
  <transition name="fade">
    <div class="app-progress">
      <div class="progress">
        <div
          v-if="type == 'determinate'"
          class="determinate"
          :style="{ width: `${progressPercent}%` }"
        ></div>
        <div v-if="type == 'indeterminate'" class="indeterminate"></div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProgressOverlay extends Vue {
  @Prop({ default: 0 }) progressPercent!: number;
  @Prop({ default: 'determinate' }) type!: string;
}
</script>
