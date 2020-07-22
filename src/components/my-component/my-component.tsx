import { Component, h } from '@stencil/core';
import {header} from "../../utils/mock";
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {

  render() {
    return <div>
      <cnt-flexy-view-saqhan-promo-header-1_01 payload={header}></cnt-flexy-view-saqhan-promo-header-1_01>
    </div>;
  }
}
