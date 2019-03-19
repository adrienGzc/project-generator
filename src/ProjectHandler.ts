'use strict';

import * as vscode from 'vscode';
import * as path from 'path';
import { content } from './Contents/contentHandling';
import {
  createFolders,
  createFile,
} from './utils';

export namespace ProjectHandler {
  if (process.platform === 'win32') {
    content.CProject.tasks.configurations[0].program += '.exe';
    content.CProject.tasks.tasks[0].args[1] = 'mingw32-make';
    content.CProject.tasks.tasks[1].args[1] = 'mingw32-make run';
    content.CProject.tasks.tasks[2].args[1] = 'mingw32-make clean';
  }

  //
  // CREATE C PROJECT
  export const createCProject = async (destination: string) => {
    const { CProject } = content;

    CProject.dir.forEach(async (folder: string) => {
      try {
        await createFolders(destination, folder);
      } catch (error) {
        console.log(error);
      }
    });
    try {
      createFile(path.join(destination, '.vscode'), 'tasks.json', JSON.stringify(CProject.tasks, null, 4));
      createFile(path.join(destination, '.vscode'), 'launch.json', JSON.stringify(CProject.tasks, null, 4));
      createFile(path.join(destination, 'src'), 'main.c', CProject.mainC);
      createFile(destination, 'Makefile', CProject.makefileC);
    } catch (error) {
      console.log(`ERROR: creation file failed. ${error}`);
    }
    vscode.window.showInformationMessage('C project create successfully');
  };

  //
  // CREATE CPP PROJECT
  export const createCppProject = async (destination: string) => {
    const { CPPProject } = content;

    CPPProject.dir.forEach(async (folder: string) => {
      try {
        await createFolders(destination, folder);
      } catch (error) {
        console.log(error);
      }
    });
    try {
      createFile(path.join(destination, '.vscode'), 'tasks.json', JSON.stringify(CPPProject.tasks, null, 4));
      createFile(path.join(destination, '.vscode'), 'launch.json', JSON.stringify(CPPProject.tasks, null, 4));
      createFile(path.join(destination, 'src'), 'main.cpp', CPPProject.mainCpp);
      createFile(destination, 'Makefile', CPPProject.cppMakefile);
    } catch (error) {
      console.log(`ERROR: creation file failed. ${error}`);
    }
    vscode.window.showInformationMessage('CPP project create successfully');
  };

  //
  // CREATE REACT PROJECT
  export const createReactProject = async (destination: string) => {
    const projectName = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: 'Name of your project. Example: hello-world',
      prompt: 'Enter name of your project',
      validateInput: (text: string) => {
        const correctProjectName = /^[A-Za-z-]+$/;
        if (text.match(correctProjectName)) {
          return null;
        }
        return 'Error project name.';
      },
    });

    if (projectName !== undefined) {
      const term = vscode.window.createTerminal();
      term.show();
      term.sendText(`cd ${destination}`);
      term.sendText(`npx create-react-app ${projectName}`);
      setTimeout(() => vscode.window.showInformationMessage('React project create successfully'), 3000);
    } else {
      vscode.window.showInformationMessage('ERROR: project name. Failed to create project');
    }
  };

  //
  // CREATE REACT NATIVE PROJECT
  export const createReactNativeProject = async (destination: string) => {
    const projectName = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: 'Name of your project. Example: hello-world',
      prompt: 'Enter name of your project',
      validateInput: (text: string) => {
        const correctProjectName = /^[A-Za-z-]+$/;
        if (text.match(correctProjectName)) {
          return null;
        }
        return 'Error project name.';
      },
    });

    if (projectName !== undefined) {
      const term = vscode.window.createTerminal();
      term.show();
      term.sendText(`cd ${destination}`);
      // term.sendText('sudo npm install -g expo-cli');
      term.sendText(`react-native init ${projectName}`);
      setTimeout(() => vscode.window.showInformationMessage('React Native project create successfully'), 10000);
    } else {
      vscode.window.showInformationMessage('ERROR: project name. Failed to create project');
    }
  };
}
