<template>
  <div class="page">
    <div class="views-forms">
      <div class="views-forms__radio mb-20">
        <div class="views-forms__radio__settings mb-10">
          <div class="views-forms__radio__settings-title mb-10">
            <h1>{{ $t('radio') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Radio.png" />
          </expand-list>
          <div class="views-forms__radio__settings-controls">
            <Checkbox
              v-model="radioDisabled"
              label="disabled radio"
              class="mr-20"
            />
          </div>
        </div>
        <div class="views-forms__radio__content mb-10">
          <Radio
            value="1"
            :selectedValue.sync="radioValue"
            label="Radio 1"
            :disabled="radioDisabled"
          />
          <Radio
            value="2"
            :selectedValue.sync="radioValue"
            label="Radio 2"
            :disabled="radioDisabled"
          />
        </div>
      </div>
      <div class="views-forms__checkbox mb-20">
        <div class="views-forms__checkbox__settings mb-10">
          <div class="views-forms__checkbox__settings-title mb-10">
            <h1>{{ $t('checkbox') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Checkbox.png" />
          </expand-list>
          <div class="views-forms__checkbox__settings-controls">
            <Checkbox
              v-model="checkboxDisabled"
              label="disabled checkbox"
              class="mr-20"
            />
          </div>
        </div>
        <div class="views-forms__checkbox__content mb-10">
          <Checkbox
            v-model="checkboxValue"
            label="checkbox 1"
            class="mr-20"
            :disabled="checkboxDisabled"
          />
        </div>
      </div>
      <div class="views-forms__avocado mb-20">
        <div class="views-forms__avocado__settings mb-10">
          <div class="views-forms__avocado__settings-title mb-10">
            <h1>{{ $t('avocado') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Avocado.png" />
          </expand-list>
          <div class="views-forms__avocado__settings-controls">
            <Checkbox
              v-model="avocadoDisabled"
              label="disabled avocado"
              class="mr-20"
            />
          </div>
        </div>
        <div class="views-forms__avocado__content mb-10">
          <Avocado :disabled="avocadoDisabled" :value.sync="avocadoValue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Radio from '@/components/FormControls/Radio/Radio.vue';
import Avocado from '@/components/FormControls/Avocado/Avocado.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';
import ExpandList from '@/components/ExpandList/ExpandList.vue';

@Component({
  name: 'PageSwitches',
  components: {
    Radio,
    Avocado,
    Checkbox,
    ExpandList
  }
})
export default class PageSwitchers extends Vue {
  public radioValue: number = 1;
  public radioDisabled: boolean = false;
  public checkboxValue: boolean = false;
  public checkboxDisabled: boolean = false;
  public avocadoDisabled: boolean = false;
  public avocadoValue: boolean = false;
}
</script>

<style lang="sass">
.page
  .views-forms
    width: 100%
    height: 100%
    display: flex
    justify-content: flex-start
    align-items: flex-start
    flex-direction: column
    padding: .75rem
    > div
      width: 100%
  .views-forms__radio__content > label:not(:last-child)
    margin-right: 2.5rem
</style>
