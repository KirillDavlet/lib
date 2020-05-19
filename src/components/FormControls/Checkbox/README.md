##Компонент Checkbox!

###вызов компонента:
```vue
<Checkbox
  :disabled="false"
  v-model="checkboxValue"
  label="Checkbox"
  class="mr-20"
/>
```
###Props:
    name [String]  - атрибут для формы
    value[Boolean] - связан с v-model родителя  
    label[String]  
    disabled[Boolean] - заблокировать
###Return
    value [v-model] - 2х стор. связь 
    