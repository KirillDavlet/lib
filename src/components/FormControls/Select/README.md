##Компонент select!
(Название нужно поменять, пока что такое)
###вызов компонента:
```vue
<NewSelect
  :small="selectSmall"
  :option="dataSelectNew"
  label="язык"
  @value="valueParent"
/>
```
###Props:
    option          [ Array ]   - массив элементов для отображения
    label           [ String ]
    small           [ Boolean ] - размер select ( default стандартный )
    activeElDefault [ String ]  - если передаётся, тогда элемент будет выбранным
###Return
    @value[ String ] - передача родителю выбранного элемента
    
    