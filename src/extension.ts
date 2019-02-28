import * as vscode from 'vscode';
import { projectHandler } from './projectHandler';

export function activate(context: vscode.ExtensionContext) {

  const createProjectC = vscode.commands.registerCommand('extension.create_c_project', () => {
    projectHandler.create_c_project();
  });

  const createProjectCPP = vscode.commands.registerCommand('extension.create_cpp_project', () => {
    vscode.window.showInformationMessage('I create my project cpp');
  });

  context.subscriptions.push(createProjectC, createProjectCPP);
}

export function deactivate() {}
