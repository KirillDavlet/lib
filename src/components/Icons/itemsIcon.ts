const requireComponents = require.context(
  './IconComponents',
  false,
  /Icon[A-Z]\w+\.vue$/
);

let components: { [index: string]: any } = {};
let iconsName: string[] = [];

requireComponents.keys().forEach((fileName: any) => {
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');
  iconsName.push(componentName.replace(/Icon/, ''));
  const componentConfig = requireComponents(fileName);

  components[componentName] = componentConfig.default || componentConfig;
});

export { components, iconsName };
