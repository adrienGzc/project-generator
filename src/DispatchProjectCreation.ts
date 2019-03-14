'use strict';

import * as vscode from 'vscode';
import { ProjectHandler } from './ProjectHandler';
import { openDialogForFolder } from './utils';

export async function createProject(type: string) {
  // Open the windows to choose the folder to create the project
  const result: vscode.Uri = await openDialogForFolder();
  // Open the destination with the project create in there
  await vscode.commands.executeCommand('vscode.openFolder', result);

  // If we get the folder destination then create project
  if (result && result.fsPath) {
    switch (type) {
      case 'c':
        ProjectHandler.create_c_project(result.fsPath);
        vscode.window.showInformationMessage('C project create successfully');
        break;
      case 'cpp':
        ProjectHandler.create_cpp_project(result.fsPath);
        vscode.window.showInformationMessage('CPP project create successfully');
        break;
      case 'react':
        ProjectHandler.createReactProject(result.fsPath);
        vscode.window.showInformationMessage('React project create successfully');
      default:
        console.log(`ERROR: ${type} invalid type project to create.`);
    }
  } else {
    vscode.window.showInformationMessage('FAILED: open dialog folder');
  }
}
