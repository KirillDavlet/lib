<template>
  <div class="page">
    <div class="views-buttons">
      <div class="views-buttons__settings">
        <div class="views-buttons__settings-title mb-5">
          <h1>{{ $t('button') }}</h1>
        </div>
        <expand-list>
          <img src="../../../../../../public/readme/Buttonspng.png" />
        </expand-list>
        <div class="views-buttons__settings-set">
          <div class="settings-icons mb-20">
            <Checkbox
              v-model="icons"
              :label="icons ? 'убрать иконки' : 'отобразить иконки'"
              class="mb-20"
            />
            <NewSelect
              label="иконка"
              :option="IconsName"
              @value="valueParent"
              :activeElDefault="selectIcons"
              class="mb-20"
            />
          </div>
          <div class="settings-big mb-20">
            <Checkbox
              v-model="big"
              :label="big ? $t('big') : $t('small')"
              class="mb-20"
            />
          </div>
          <div class="settings-disabled mb-20">
            <Checkbox
              v-model="disabled"
              :label="disabled ? $t('locked') : $t('unlocked')"
              class="mb-20"
            />
          </div>
          <div class="settings-label mb-20">
            <Input v-model="label" class="mb-20" :label="$t('button')" />
          </div>
        </div>
      </div>
      <div class="views-buttons__content">
        <div v-for="(el, i) in variableButton" :key="i">
          <span>type - {{ el }}</span>
          <Button
            :type="el"
            :big="big"
            :disabled="disabled"
            :label="$t(label)"
            link="/ui-kit/form/formElements/buttons"
          >
            <svg-icon v-if="icons" :name="selectIcons" size="20" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Button from '@/components/Buttons/Button/Button.vue';
import SvgIcon from '@/components/Icons/SvgIcon.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';
import ExpandList from '@/components/ExpandList/ExpandList.vue';
import NewSelect from '@/components/FormControls/Select/NewSelect.vue';
import Input from '@/components/FormControls/Input/Input.vue';
import { iconsName } from '../../../../../components/Icons/itemsIcon';

@Component({
  name: 'PageButtons',
  components: {
    ExpandList,
    Button,
    SvgIcon,
    Checkbox,
    NewSelect,
    Input
  }
})
export default class PageButtons extends Vue {
  public variableButton = ['primary', 'secondary', 'secondary2'];
  public selectIcons: String = 'account';
  public icons: Boolean = false;
  public big: Boolean = false;
  public disabled: Boolean = false;
  public label: String = 'пользовательская копка';
  public valueParent(data: string) {
    this.selectIcons = data;
  }

  get IconsName(): string[] {
    return iconsName;
  }
}
</script>

<style lang="sass">
.page
  .views-buttons
    width: 100%
    height: 100%
    display: flex
    justify-content: flex-start
    align-items: flex-start
    flex-direction: column
    padding: .75rem
    &__settings
      &-set
        display: flex
        flex-wrap: wrap
        align-items: flex-start
        flex-direction: column
        > div
        .settings-icons > div
          margin-top: 1rem
    &__content
      display: flex
      align-items: center
      justify-content: flex-start
      flex-wrap: wrap
      > div
        margin-right: 1.5rem
        > div
          margin-top: 1rem
</style>
