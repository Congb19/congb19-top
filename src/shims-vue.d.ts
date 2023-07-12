/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.md' {
  interface a {
    html: any,
    VueComponent: any
  }
  // export default a
}
declare interface Window {
  $message: any
}
declare module '@congb19/combo-ui' {
  const create: any
  const C: any
}
declare module '@congb19/combo-ui/dist/combo-ui/es/src/index.mjs' {
  const CMessageProvider: any
  const CThemeProvider: any
  const useMsg: any
  const useTheme: any
  const CButton: any
}