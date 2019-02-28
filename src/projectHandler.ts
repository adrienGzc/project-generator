import * as vscode from 'vscode';
import * as path from 'path';
import * as fse from "fs-extra";

export namespace projectHandler {
  export function create_c_project() {
    vscode.window.showInformationMessage('I create my project');
  }
}
