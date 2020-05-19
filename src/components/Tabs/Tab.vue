<template>
  <transition :name="transitionName">
    <div class="app-tab" v-if="active"><slot /></div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Tab'
})
export default class Tab extends Vue {
  @Prop({ default: '' }) header!: string;
  @Prop({ default: '' }) name!: string;

  public active: boolean = false;
  public transitionName: string = 'fade';

  public setActive(value: boolean) {
    this.active = value;
  }
  public setTransitionName(value: string) {
    this.transitionName = value;
  }
}
</script>
