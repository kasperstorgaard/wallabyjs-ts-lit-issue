import test from 'ava';
import {App} from './app';

test('it works', t => {
  t.is(1 + 1, 2);
});

test('it doesn\'t work', t => {
  const sut = new App();
  t.is(sut.sayHello(), 'hello!');
});