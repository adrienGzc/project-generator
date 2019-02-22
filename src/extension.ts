import * as vscode from 'vscode';
//import * as path from 'path';
import * as fse from "fs-extra";

export function activate(context: vscode.ExtensionContext) {

	let createProjectC = vscode.commands.registerCommand('extension.create_c_project', () => {
		vscode.window.showInformationMessage('I create my project');
	});

	context.subscriptions.push(createProjectC);
}

export function deactivate() {}
