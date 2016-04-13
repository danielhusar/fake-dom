import test from 'ava';
import './';

test(`Globals`, t => {
	t.truthy(global.document);
	t.truthy(global.window);
	t.truthy(global.navigator);
	t.truthy(global.self);
	t.truthy(global.location);
	t.is(global.location.origin, 'http://www.foo.com');
	t.falsy(global.XMLHttpRequest);
});
