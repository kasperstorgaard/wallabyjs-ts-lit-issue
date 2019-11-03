import {html} from 'lit-html';

export class App {
  sayHello() {
    return 'hello!';
  }

  render() {
    return html`
      <h1>hello!</h1>
    `;
  }
}