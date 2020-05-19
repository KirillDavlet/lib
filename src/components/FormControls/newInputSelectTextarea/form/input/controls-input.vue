<template>
  <input type="text" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
@Component({
  name: 'controls-input'
})
export default class ControlsInput extends Vue {
  @Prop({ default: 'input' }) label!: string;
  @Emit('input')
  input(e: any) {
    return e.target ? e.target.value : e;
  }
  @Emit('focus')
  focus(e: FocusEvent) {
    this.isFocus = true;
    return e;
  }
  @Emit('blur')
  blur(e: any) {
    this.isFocus = false;
    return e;
  }
  public isActive: boolean = false;
  public isFocus: boolean = false;
}
</script>
<style lang="sass"></style>
