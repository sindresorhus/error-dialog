import {runAppleScriptAsync} from 'run-applescript';
import escapeString from 'escape-string-applescript';

const icon = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/AlertStopIcon.icns';

export default async function errorDialog(error, title) {
	error = escapeString(error.stack || error);
	title = title ? `with title "${escapeString(title)}"` : '';

	await runAppleScriptAsync(`display dialog "${error}" ${title} with icon POSIX file "${icon}" buttons {"OK"}`);
}
