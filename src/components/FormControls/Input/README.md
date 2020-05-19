##Компонент иконка!

###вызов компонента:
```vue
<Input
  v-for="(el, i) in inputsVariable"
  :key="'input' + i"
  :has-help="InputHelp"
  :has-error="InputError"
  v-bind="el"
  v-model="textInputVal"
  class="mb-20"
/>
```
###Props:
    helpText    [string]  - текст для отображения подсказки 
    errorText   [string]  - текст для отображения ошибки
    hasHelp     [boolean] - флаг отображения подсказки
    hasError    [boolean] - флаг отображения ошибка
    label       [string]
    placeholder [string]  - стандартное значение дял Input
    type        [string]  ( text/search ) search - иконка поиска
###Return
    value [v-model] - 2х стор. связь
    