'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
import * as fse from 'fs-extra';

export async function openDialogForFolder(): Promise<vscode.Uri | undefined> {
  const options: vscode.OpenDialogOptions = {
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
  };

  const result: vscode.Uri[] | undefined = await vscode.window.showOpenDialog(options);
  if (result) {
    return Promise.resolve(result[0]);
  }
  return Promise.resolve(undefined);
}

export function createFolders(location: string, folder: string): void {
  try {
    fse.ensureDirSync(path.join(location, folder));
  } catch (err) {
    console.error(err);
  }
}

export function createFile(location: string, fileName: string, content: string): void {
  try {
    fse.writeFileSync(path.join(location, fileName), content);
  } catch (error) {
    console.log(error);
  }
}
