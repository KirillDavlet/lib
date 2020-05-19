<template>
  <div class="page">
    <div class="testings-icons__settings">
      <expand-list>
        <img src="../../../../../public/readme/Icons.png" />
      </expand-list>
      <div class="testings-icons__settings-search">
        <Input
          help-text="поиск по иконкам"
          :has-help="true"
          type="search"
          label="search"
          v-model="search"
        />
      </div>
      <div class="testings-icons__settings-size">
        <Input
          help-text="размер иконок"
          :has-help="true"
          label="size"
          v-model="Size"
        />
      </div>
      <div class="testings-icons__settings-stroke">
        <Input
          help-text="ширина линий"
          :has-help="true"
          label="stroke"
          v-model="StrokeWidth"
        />
      </div>
      <div class="testings-icons__settings-color">
        <label>color</label>
        <input type="color" v-model="Color" />
      </div>
      <div class="testings-icons__settings-colorHover">
        <label>color-hover</label>
        <input type="color" v-model="ColorHover" />
      </div>
      <div class="testings-icons__settings-transform">
        <checkbox v-model="transformFlag" label="разворот, поворот на 180" />
      </div>
      <div class="testings-icons__settings-title">
        <checkbox v-model="titleFlag" label="title ( наведение )" />
      </div>
    </div>
    <div class="testings-icons__container">
      <div
        class="testings-icons__container-icon"
        v-for="(el, i) in SearchNames"
        :key="`icon-${i}`"
      >
        <Svg-icon
          :titleF="titleFlag"
          :name="el"
          :size="Size"
          :stroke-width="StrokeWidth"
          :color="Color"
          :hover-color="ColorHover"
          :style="transformFlag ? transform : ''"
        />
        <span>{{ el }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SvgIconBase from '@/components/Icons/SvgIconBase.vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';
import { iconsName } from '@/components/Icons/itemsIcon';
import ExpandList from '@/components/ExpandList/ExpandList.vue';
import Input from '@/components/FormControls/Input/Input.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';

@Component({
  components: {
    Input,
    Checkbox,
    ExpandList,
    SvgIcon,
    svgIconBase: SvgIconBase
  }
})
export default class Icons extends Vue {
  public IconsName: string[] = iconsName;
  public Size: number = 24;
  public Color: string = '#5A81EA';
  public ColorHover: string = '#FFFFFF';
  public StrokeWidth: number = 1;
  public transform: string = 'transform: rotate(180deg)';
  public transformFlag: boolean = false;
  public titleFlag: boolean = true;
  public search: string = '';

  /**
   * поиск иконок по названиям
   * @constructor
   */
  get SearchNames(): string[] {
    if (this.search.length > 0) {
      let newNames: string[] = [];
      this.IconsName.forEach(el => {
        if (el.toLowerCase().includes(this.search.toLowerCase())) {
          newNames.push(el);
        }
      });
      return newNames;
    }
    return this.IconsName;
  }
}
</script>

<style lang="sass">
.page
  .testings-icons__settings
    width: 100%
    height: auto
    display: flex
    justify-content: flex-start
    align-items: center
    flex-wrap: wrap
    padding: 1rem 0
    > div
      margin-bottom: 1rem
      margin-right: 1rem
      display: flex
      justify-content: flex-start
      align-items: center
  .testings-icons__container
    display: flex
    justify-content: flex-start
    align-items: center
    flex-wrap: wrap
    padding: 2rem
    box-sizing: border-box
    &-icon
      width: 15rem
      overflow: hidden
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      padding: 1rem
      > svg
        margin-bottom: 1rem
</style>
