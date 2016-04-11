import test from 'ava';
import './';

test(`Globals`, t => {
	t.truthy(global.document);
	t.truthy(global.window);
	t.truthy(global.navigator);
	t.falsy(global.XMLHttpRequest);
});
