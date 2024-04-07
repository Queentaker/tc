import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  render() {
    return (
      <h1 class="text-red-100">This is a Stencil component using Tailwind</h1>
    );
  }
}
