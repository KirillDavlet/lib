##Компонент Radio!

###вызов компонента:
```vue
<Radio
  value="1"
  :selectedValue.sync="radioValue"
  label="Radio 1"
  class="mr-20"
  :disabled="boolean"
/>
```
###Props:
    name         [String]  - атрибут для формы
    value        [Boolean] - хранимое значение для radio
    label        [String]  
    disabled     [Boolean] - заблокировать
    selectedValue[Boolean] - связь гурры radio кнопок 
###Return
    selectedValue.sync [v-model] - 2х стор. связь 
    