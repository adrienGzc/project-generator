'use strict';

import * as vscode from 'vscode';
import { ProjectHandler } from './ProjectHandler';
import { openDialogForFolder } from './utils';

export async function createProject(type: string) {
  // Open the windows to choose the folder to create the project
  const result: vscode.Uri = await openDialogForFolder();

  if (result && result.fsPath) {
    switch (type) {
      case 'c':
        await vscode.commands.executeCommand('vscode.openFolder', result);
        await ProjectHandler.createCProject(result.fsPath);
        break;
      case 'cpp':
        await vscode.commands.executeCommand('vscode.openFolder', result);
        await ProjectHandler.createCppProject(result.fsPath);
        break;
      case 'react':
        await ProjectHandler.createReactProject(result.fsPath);
        break;
      case 'reactn':
        await ProjectHandler.createReactNativeProject(result.fsPath);
        break;
      default:
        console.log(`ERROR: ${type} invalid type project to create.`);
    }
  }
}
