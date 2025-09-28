declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: 'vertical' | 'horizontal';
    getDirection?: boolean;
    getSpeed?: boolean;
    multiplier?: number;
    reloadOnContextChange?: boolean;
    lerp?: number;
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    update(): void;
    destroy(): void;
    scrollTo(
      target: HTMLElement | string | number,
      options?: { offset?: number; duration?: number; easing?: number[] }
    ): void;
    start(): void;
    stop(): void;
    on(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
  }
}
