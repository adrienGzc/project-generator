import * as vscode from 'vscode';
import * as path from 'path';
import * as fse from 'fs-extra';

export namespace creationProjectHandler {

  export function createFolders(location: string): void {
    try {
      fse.ensureDirSync(path.join(location, 'TEST'));
    } catch (err) {
      console.error(err);
    }
  }

  export async function openDialogForFolder(): Promise<vscode.Uri> {
    const options: vscode.OpenDialogOptions = {
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
    };

    const result: vscode.Uri[] | undefined = await vscode.window.showOpenDialog(options);
    if (!result) {
      console.log('FAILED');
    } else {
      console.log('SUCCESS');
    }
    if (result) {
      return Promise.resolve(result[0]);
    }
    return Promise.resolve(null);
  }

  export async function create_c_project() {
    vscode.window.showInformationMessage('I create my C project');
    const result: vscode.Uri = await openDialogForFolder();

    console.log(result.fsPath);
    if (result && result.path) {
      await vscode.commands.executeCommand('vscode.openFolder', result);
      createFolders(result.fsPath);
    }
  }

  export function create_cpp_project() {
    vscode.window.showInformationMessage('I create my C project');
  }
}
