import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import SomeComponent from './SomeComponent';

it('renders App and test snapshot', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<App />);
	const output = renderer.getRenderOutput();

	expect(output).toMatchSnapshot();
});

it('renders Some Component', () => {
	const renderer = new ShallowRenderer();
	renderer.render(<SomeComponent />);
	const output = renderer.getRenderOutput();

	expect(output.type).toBe('div');
	expect(output.props.children).toEqual('I am from SomeComponent');
	expect(output).toMatchSnapshot();
});
