declare module 'mdb-ui-kit' {
  export class Toast {
    constructor(element: Element | null, options?: object)
    show(): void
    hide(): void
    dispose(): void
  }

  export class Tooltip {
    constructor(element: Element | null, options?: object)
    show(): void
    hide(): void
    dispose(): void
    toggle(): void
  }

  export class Modal {
    constructor(element: Element | null, options?: object)
    show(): void
    hide(): void
    dispose(): void
  }
}
