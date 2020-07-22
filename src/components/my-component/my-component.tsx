import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {

  render() {
    return <div>
      <cnt-flexy-view-saqhan-promo-header-1_01></cnt-flexy-view-saqhan-promo-header-1_01>
      тут будет сайт
    </div>;
  }
}
