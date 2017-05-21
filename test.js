import test from 'ava';
import m from '.';

test(t => {
	const fixture = m('./fixture', src => `${src}module.exports = 'unicorns';`);
	t.is(fixture, 'unicorns');
});
