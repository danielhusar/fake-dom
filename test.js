import test from 'ava';
import './';

test('Globals', t => {
	t.ok(global.document);
	t.ok(global.window);
	t.ok(global.navigator);
});
