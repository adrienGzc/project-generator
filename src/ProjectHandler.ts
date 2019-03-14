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

  export function create_c_project(dest: string) {
    const { CProject } = content;

    CProject.dir.forEach(async (folder: string) => {
      try {
        await createFolders(dest, folder);
      } catch (error) {
        console.log(error);
      }
    });
    try {
      createFile(path.join(dest, '.vscode'), 'tasks.json', JSON.stringify(CProject.tasks, null, 4));
      createFile(path.join(dest, '.vscode'), 'launch.json', JSON.stringify(CProject.tasks, null, 4));
      createFile(path.join(dest, 'src'), 'main.c', CProject.mainC);
      createFile(dest, 'Makefile', CProject.makefileC);
    } catch (error) {
      console.log(`ERROR: creation file failed. ${error}`);
    }
  }

  export function create_cpp_project(dest: string) {
    const { CPPProject } = content;

    CPPProject.dir.forEach(async (folder: string) => {
      try {
        await createFolders(dest, folder);
      } catch (error) {
        console.log(error);
      }
    });
    try {
      createFile(path.join(dest, '.vscode'), 'tasks.json', JSON.stringify(CPPProject.tasks, null, 4));
      createFile(path.join(dest, '.vscode'), 'launch.json', JSON.stringify(CPPProject.tasks, null, 4));
      createFile(path.join(dest, 'src'), 'main.cpp', CPPProject.mainCpp);
      createFile(dest, 'Makefile', CPPProject.cppMakefile);
    } catch (error) {
      console.log(`ERROR: creation file failed. ${error}`);
    }
  }

  export function createReactProject(dest: string) {
    const option: vscode.TerminalOptions = {
      name: 'react',
      shellPath: dest,
    };

    const term = vscode.window.createTerminal(option);
    term.show();
    term.sendText('npx create-react-app hello');
  }
}
