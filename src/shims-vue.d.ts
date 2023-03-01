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