'use strict';
const runApplescript = require('run-applescript');
const escapeString = require('escape-string-applescript');

const icon = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns';

module.exports = (err, title) => {
	err = escapeString(err.stack || err);
	title = title ? `with title "${escapeString(title)}"` : '';

	return runApplescript(`display dialog "${err}" ${title} with icon POSIX file "${icon}" buttons {"OK"}`);
};
