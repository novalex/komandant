/* eslint jest/expect-expect: off, jest/no-test-callback: off */
import { ClientFunction, Selector } from 'testcafe';

const getPageUrl = ClientFunction(() => window.location.href);
const getPageTitle = ClientFunction(() => document.title);
const assertNoConsoleErrors = async (t) => {
	const { error } = await t.getBrowserConsoleMessages();
	await t.expect(error).eql([]);
};

const homePageTitle = 'Komandant Visual CLI';

fixture`Home Page`.page('../../app/app.html').afterEach(assertNoConsoleErrors);

test('e2e', async (t) => {
	await t.expect(getPageTitle()).eql(homePageTitle);
});

test('should open window and contain expected page title', async (t) => {
	await t.expect(getPageTitle()).eql(homePageTitle);
});

test(
	'should not have any logs in console of main window',
	assertNoConsoleErrors
);

const addNewCommandText = 'Add new command';

const clickAddNewCommandLink = (t) =>
	t.click(Selector('a').withExactText(addNewCommandText));

test(`should navigate to New Comand page with click on the "${addNewCommandText}" link`, async (t) => {
	await clickAddNewCommandLink(t);
	await t.expect(Selector('header h1').innerText).eql('New Command');
});

test('should navigate to /new-command', async (t) => {
	await clickAddNewCommandLink(t);
	await t.expect(getPageUrl()).contains('/new-command');
});

fixture`New Command Tests`
	.page('../../app/app.html')
	.beforeEach(clickAddNewCommandLink)
	.afterEach(assertNoConsoleErrors);

test('should go back to Home if back button clicked', async (t) => {
	await t
		.click('[data-tid="backButton"] > a')
		.expect(Selector('[data-tid="commands"]').visible)
		.ok();
});
