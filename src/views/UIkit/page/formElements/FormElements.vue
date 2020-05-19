<template>
  <div class="page">
    <div class="views__MyComponents"></div>
    <div class="views-buttons">
      <div class="views-buttons__settings">
        <div class="views-buttons__settings-title">
          <h1>Buttons</h1>
        </div>
        <div class="views-buttons__settings-set">
          <div class="settings-icons">
            <label>{{ icons ? 'убрать иконки' : 'отобразить иконки' }}</label>
            <input type="checkbox" v-model="icons" />
            <select v-model="selectIcons">
              <option v-for="(el, i) in IconsName" :key="i" :value="el">
                {{ el }}
              </option>
            </select>
          </div>
          <div class="settings-big">
            <label>{{ big ? 'большие' : 'маленькие' }}</label>
            <input type="checkbox" v-model="big" />
          </div>
          <div class="settings-disabled">
            <label>{{ disabled ? 'заблокированы' : 'разблокированы' }}</label>
            <input type="checkbox" v-model="disabled" />
          </div>
          <div class="settings-label">
            <label>текст кнопки</label>
            <input type="text" v-model="label" />
          </div>
        </div>
      </div>
      <div class="views-buttons__content">
        <Button
          v-for="(el, i) in variableButton"
          :type="el"
          :big="big"
          :disabled="disabled"
          :key="i"
          :label="label"
          link="http://localhost:8080/form/formElements"
        >
          <svg-icon v-if="icons" :name="selectIcons" size="20" />
        </Button>
      </div>
    </div>
    <div class="views-inputs">
      <div class="views-inputs__settings">
        <div class="views-inputs__settings-title">
          <h1>Inputs</h1>
        </div>
        <div class="views-inputs__settings-controls">
          <Checkbox v-model="InputHelp" label="help input" class="mr-20" />
          <Checkbox v-model="InputError" label="error input" class="mr-20" />
        </div>
      </div>
      <div class="views-inputs__content">
        <Input
          v-for="(el, i) in inputsVariable"
          :key="'input' + i"
          :has-help="InputHelp"
          :has-error="InputError"
          v-bind="el"
          v-model="textInputVal"
          class="mb-20"
        />
      </div>
    </div>
    <div class="views-textarea">
      <div class="views-textarea__settings">
        <div class="views-textarea__settings-title">
          <h1>Textarea</h1>
        </div>
        <div class="views-textarea__settings-controls">
          <Checkbox
            v-model="flagTextareaLength"
            label="размер textarea"
            class="mr-20"
          />
          <input type="number" v-model="textareaLength" />
        </div>
        <div class="views-textarea__content">
          <Textarea
            :length="flagTextareaLength ? textareaLength : false"
            v-model="textTextarea"
            label="Textarea"
            class="mb-20"
          />
        </div>
      </div>
    </div>
    <div class="views-select">
      <div class="views-select__settings">
        <div class="views-select__settings-title">
          <h1>Select</h1>
        </div>
        <div class="views-select__settings-controls">
          <Checkbox v-model="selectSmall" label="select samll" class="mr-20" />
        </div>
      </div>
      <div class="views-select__content">
        <NewSelect
          :small="selectSmall"
          :option="dataSelectNew"
          label="язык"
          @value="valueParent"
        />
      </div>
    </div>
    <div class="views-small">
      <div class="views-small__settings">
        <div class="views-small__settings-title">
          <h1>Small</h1>
        </div>
        <div class="views-small__settings-set">
          <checkbox v-model="smallRight" label="right" />
          <checkbox v-model="smallLabel" label="label" />
        </div>
      </div>
      <div class="views-select__content">
        <Small
          :right="smallRight"
          :value.sync="selectSmallValue"
          :label="smallLabel ? 'стол' : ''"
        />
      </div>
    </div>
    <div class="views-check-radio">
      <div class="views-check-radio__settings">
        <div class="views-check-radio__settings-title">
          <h1>Checkbox / Radio</h1>
        </div>
      </div>
      <div class="views-check-radio__content">
        <Checkbox
          :disabled="false"
          v-model="checkboxValue"
          label="Checkbox"
          class="mr-20"
        />
        <Radio
          value="1"
          :selectedValue.sync="radioValue"
          label="Radio 1"
          class="mr-20"
          :disabled="true"
        />
        <Radio value="2" :selectedValue.sync="radioValue" label="Radio 2" />
      </div>
    </div>
    <div class="views-check">
      <div class="views-check__settings">
        <div class="views-check__settings-title">
          <h1>Avocado</h1>
        </div>
        <div class="views-buttons__settings-set">
          <Checkbox v-model="avacadoDisabled" label="disabled" class="mr-20" />
        </div>
        <div class="views-check__content">
          <Avocado :disabled="avacadoDisabled" :value.sync="valueAvacado" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="FormElements.ts"></script>

<style lang="sass">
.views-buttons
  width: 100%
  height: auto
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-direction: column
  padding: .75rem
  &__settings
    display: flex
    flex-direction: column
    &-set
      display: flex
      justify-content: center
      align-items: center
      height: 30px
      margin-top: 7px
      > div
        margin-right: 7px
  &__content
    display: flex
    margin-top: 15px
    flex-wrap: wrap
    > div
      margin-right: 20px
.views-inputs
  width: 100%
  height: auto
  display: flex
  align-items: flex-start
  justify-content: flex-start
  margin-top: 1rem
  flex-direction: column
  &__content
    display: flex
    margin: 1rem 0
    > div
      margin-right: 1rem
.views-select
  display: flex
  flex-direction: column
</style>
