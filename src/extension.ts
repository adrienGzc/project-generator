'use strict';

import * as vscode from 'vscode';
import { createProject } from './DispatchProjectCreation';

export function activate(context: vscode.ExtensionContext) {

  const createProjectC = vscode.commands.registerCommand('extension.create_c_project', () => createProject('c'));
  const createProjectCPP = vscode.commands.registerCommand('extension.create_cpp_project', () => createProject('cpp'));
  const createProjectReact = vscode.commands.registerCommand('extension.create_react_project', () => createProject('react'));

  context.subscriptions.push(
    createProjectC,
    createProjectCPP,
    createProjectReact,
  );
}

export function deactivate() {}
