##Компонент Small!

###вызов компонента:
```vue
<Small
  :right="smallRight"
  :value.sync="selectSmallValue"
  :label="smallLabel ? 'стол' : ''"
/>
```
###Props:
    label           [ String ] - параметр который показывает что либо (справа)
    value           [ any ] - возвращаемый параметр ( связанный )
    right           [ Boolean ] - отображение вводимого числа справа/слева
###Return
    @value[ v-model] - 2x стор. связь
    
    