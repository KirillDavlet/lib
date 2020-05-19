export default [
  {
    path: '/',
    component: () => import('@/views/UIkit/Layout.vue'),
    children: [
      {
        path: '',
        name: 'icons',
        meta: {
          name: 'UI-Icons'
        },
        component: () => import('@/views/UIkit/page/Icons/Icons.vue')
      },
      {
        path: 'Tabs',
        name: 'tabs',
        meta: {
          name: 'UI-Tabs'
        },
        component: () => import('@/views/UIkit/page/Tabs/PageTabs.vue')
      },
      {
        path: 'form/formElements/Buttons',
        name: 'form-formElements-Buttons',
        meta: {
          name: 'UI-Buttons'
        },
        component: () =>
          import('@/views/UIkit/page/formElements/Buttons/PageButtons.vue')
      },
      {
        path: 'form/formElements/Inputs',
        name: 'form-formElements-Inputs',
        meta: {
          name: 'UI-Inputs'
        },
        component: () =>
          import('@/views/UIkit/page/formElements/Inputs/PageInputs.vue')
      },
      {
        path: 'form/formElements/Switchers',
        name: 'form-formElements-Switchers',
        meta: {
          name: 'UI-switchers'
        },
        component: () =>
          import('@/views/UIkit/page/formElements/Switches/PageSwitches.vue')
      }
    ]
  }
];
