import test from 'ava';
import m from './';

test(t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	t.notThrows(m(new Error('test')));
});

