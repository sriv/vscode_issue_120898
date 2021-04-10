import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	test('Sample test', async () => {
		try{
			await vscode.commands.executeCommand('helloworld.helloWorld');
			assert.fail('Expected helloworld.helloWorld to throw error');
		}catch(err){
			assert.strictEqual(err.message, 'This is a test error');
		}
	});
});
