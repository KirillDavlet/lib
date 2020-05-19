<template>
  <div class="page">
    <div class="views-forms">
      <div class="views-forms__input mb-20">
        <div class="views-forms__input__settings mb-10">
          <div class="views-forms__input__settings-title mb-10">
            <h1>{{ $t('input') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Inputs.png" />
          </expand-list>
          <div class="views-forms__input__settings-controls">
            <Checkbox
              v-model="InputHelp"
              :label="$t('helpText')"
              class="mr-20"
            />
            <Checkbox
              v-model="InputError"
              :label="$t('helpError')"
              class="mr-20"
            />
          </div>
        </div>
        <div class="views-forms__input__content">
          <div
            v-for="(el, i) in inputsVariable"
            class="mb-15"
            :key="'input' + i"
          >
            <Input
              :has-help="InputHelp"
              v-bind="el"
              v-model="textInputVal"
              :rules="InputError ? el.rules : ''"
            />
          </div>
        </div>
      </div>
      <div class="views-forms__textarea mb-20">
        <div class="views-forms__textarea__settings mb-10">
          <div class="views-forms__textarea__settings-title mb-10">
            <h1>{{ $t('textarea') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Textarea.png" />
          </expand-list>
          <div class="views-forms__textarea__settings-controls">
            <Checkbox
              v-model="flagTextareaLength"
              label="размер textarea"
              class="mr-20"
            />
            <Input v-model="textareaLength" />
          </div>
        </div>
        <div class="views-forms__textarea__content">
          <Textarea
            :length="flagTextareaLength ? textareaLength : false"
            v-model="textTextarea"
            label="Textarea"
            class="mb-20"
          />
        </div>
      </div>
      <div class="views-forms__select mb-20">
        <div class="views-forms__select__settings mb-10">
          <div class="views-forms__select__settings-title mb-10">
            <h1>{{ $t('select') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Select.png" />
          </expand-list>
          <div class="views-forms__select__settings-controls">
            <Checkbox
              v-model="selectSmall"
              label="select samll"
              class="mr-20"
            />
          </div>
        </div>
        <div class="views-forms__select__content">
          <NewSelect
            :small="selectSmall"
            :option="dataSelectNew"
            :label="$t('lang')"
            @value="valueParent"
          />
        </div>
      </div>
      <div class="views-forms__small mb-20">
        <div class="views-forms__small__settings mb-10">
          <div class="views-forms__small__settings-title mb-10">
            <h1>{{ $t('small') }}</h1>
          </div>
          <expand-list>
            <img src="../../../../../../public/readme/Small.png" />
          </expand-list>
          <div class="views-forms__small__settings-set">
            <checkbox v-model="smallRight" label="right" />
            <checkbox v-model="smallLabel" label="label" />
          </div>
        </div>
        <div class="views-forms__small__content">
          <Small
            :right="smallRight"
            :value.sync="selectSmallValue"
            :label="smallLabel ? 'стол' : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Input from '@/components/FormControls/Input/Input.vue';
import Textarea from '@/components/FormControls/Textarea/Textarea.vue';
import NewSelect from '@/components/FormControls/Select/NewSelect.vue';
import Small from '@/components/FormControls/Small/Small.vue';
import Checkbox from '@/components/FormControls/Checkbox/Checkbox.vue';
import ExpandList from '@/components/ExpandList/ExpandList.vue';

@Component({
  name: 'PageInputs',
  components: {
    Input,
    Textarea,
    NewSelect,
    Small,
    Checkbox,
    ExpandList
  }
})
export default class PageInputs extends Vue {
  public InputHelp = false;
  public InputError = false;
  public textInputVal: String = '';
  public inputsVariable = [
    {
      label: 'inputText',
      type: '',
      helpText: 'введите четное число',
      errorText: 'не правильный формат',
      rules: 'required|email'
    },
    {
      label: 'textSearch',
      type: 'search',
      helpText: 'поиск',
      errorText: 'некоректный формат ввода',
      rules: ''
    }
  ];
  public textTextarea: String = '';
  public flagTextareaLength: boolean = false;
  public textareaLength: number = 10;
  public selectSmall: boolean = false;
  public selectSmallValue: any = 0;
  public dataSelectNew: any = ['rus', 'eng', 'japan'];
  public selectValueNew: any = null;
  public smallRight: boolean = false;
  public smallLabel: boolean = false;

  public valueParent(data: any) {
    this.selectValueNew = data;
  }
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
    &__small
      &__settings
        &-set
          display: flex
          > label:first-child
            margin-right: 1.5rem
  .views-forms__textarea__settings-controls
    > div
      margin-top: 1.5rem
</style>
