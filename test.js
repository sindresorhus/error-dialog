import test from 'ava';
import errorDialog from './index.js';

test('main', async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	await t.notThrowsAsync(errorDialog(new Error('test')));
});

