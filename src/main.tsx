import { render } from 'preact';
import { App } from './_app';
// import { App } from './app';
// FIXME remove this
import './index.css';

render(<App />, document.getElementById('app') as HTMLElement);
