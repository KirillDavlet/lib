<template>
  <component
    v-if="iconComponent"
    :is="iconComponent.default"
    v-bind="everything()"
    v-on="$listeners"
    style="vertical-align: middle; overflow: visible;"
  >
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { capitalize } from '@/utils/strings';

@Component({
  name: 'SvgIcon'
})
export default class SvgIcon extends Vue {
  @Prop({ default: '' }) readonly name!: string;

  @Watch('name')
  iconUpdate() {
    this.initIcon();
  }

  public iconComponent: Vue.Component | null = null;

  public async created() {
    this.initIcon();
  }

  async initIcon() {
    const name = this.name
      .split('-')
      .map((i: string) => capitalize(i))
      .join('');
    this.iconComponent = await Vue.component(
      'icon',
      import(`@/components/Icons/IconComponents/Icon${name}.vue`)
    );
  }

  public everything(): any {
    return {
      ...this.$props,
      ...this.$attrs
    };
  }
  public iconComponentName(): string {
    return `icon-${this.name}`;
  }
}
</script>

<style lang="sass">
svg
  transition: .3s ease-in-out
</style>
