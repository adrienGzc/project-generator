'use strict';

export namespace content {

  export namespace CProject {
    // .vscode file
    export const tasks: any = { version: '2.0.0', tasks: [{ label: 'build', type: 'shell', group: { kind: 'build', isDefault: true }, windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', 'make'] }, { label: 'build & run', type: 'shell', group: { kind: 'test', isDefault: true }, windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', "'make run'"] }, { label: 'clean', type: 'shell', windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', "'make clean'"] }] };
    export const launch: any = { version: '0.2.0', configurations: [{ name: 'Debug', type: 'cppdbg', request: 'launch', program: '${workspaceFolder}/bin/main', args: [], stopAtEntry: false, cwd: '${workspaceRoot}', environment: [], externalConsole: true, preLaunchTask: 'build', linux: { MIMode: 'gdb' }, osx: { MIMode: 'lldb' }, windows: { MIMode: 'gdb' } }] };

    export const mainC: string = '#include <stdio.h>\n\nint main(int argc, char **argv) {\n\tprintf("Enjoy :)");\n\treturn (0);\n}';
    export const makefileC: string = 'CC	=	gcc\nCFLAGS	+=	-I ./include\nCFLAGS	+=	-W -Wall -Wextra\n\nRM	=	rm -f\n\nBIN_FOLDER = bin\n\nSRCS	=	src/main.c\n\nOBJS	=	$(SRCS:.c=.o)\n\nifeq ($(OS),Windows_NT)\n\tNAME	=	hello_world.exe\nelse\n\tNAME	=	hello_world\nendif\n\nall: $(BIN_FOLDER)/$(NAME)\n\n$(BIN_FOLDER)/$(NAME):$(OBJS)\n\t$(CC) $(CFLAGS) $(OBJS) -o $(BIN_FOLDER)/$(NAME)\n\nclean:\n\t$(RM) $(OBJS)\n\nfclean: clean\n\t$(RM) $(BIN_FOLDER)/$(NAME)\n\nre: fclean all\n\n.PHONY: all clean fclean re';
    export const dir: string[] = ['.vscode', 'bin', 'include', 'lib', 'src'];
  }

  export namespace CPPProject {
    // .vscode file
    export const tasks: any = { version: '2.0.0', tasks: [{ label: 'build', type: 'shell', group: { kind: 'build', isDefault: true }, windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', 'make'] }, { label: 'build & run', type: 'shell', group: { kind: 'test', isDefault: true }, windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', "'make run'"] }, { label: 'clean', type: 'shell', windows: { command: 'powershell' }, linux: { command: 'bash' }, args: ['-c', "'make clean'"] }] };
    export const launch: any = { version: '0.2.0', configurations: [{ name: 'Debug', type: 'cppdbg', request: 'launch', program: '${workspaceFolder}/bin/main', args: [], stopAtEntry: false, cwd: '${workspaceRoot}', environment: [], externalConsole: true, preLaunchTask: 'build', linux: { MIMode: 'gdb' }, osx: { MIMode: 'lldb' }, windows: { MIMode: 'gdb' } }] };

    export const cppMakefile: string = 'CC\t\t:= g++\nC_FLAGS := -std=c++17 -Wall -Wextra\n\nBIN\t\t:= bin\nSRC\t\t:= src\nINCLUDE\t:= include\nLIB\t\t:= lib\n\nLIBRARIES\t:=\n\nifeq ($(OS),Windows_NT)\nEXECUTABLE\t:= main.exe\nelse\nEXECUTABLE\t:= main\nendif\n\nall: $(BIN)/$(EXECUTABLE)\n\nclean:\n\t$(RM) $(BIN)/$(EXECUTABLE)\n\nrun: all\n\t./$(BIN)/$(EXECUTABLE)\n\n$(BIN)/$(EXECUTABLE): $(SRC)/*\n\t$(CC) $(C_FLAGS) -I$(INCLUDE) -L$(LIB) $^ -o $@ $(LIBRARIES)';
    export const mainCpp: string = '#include <iostream>\n\nint main(int argc, char **argv) {\n\tstd::cout << "Enjoy :)" << std::endl;\n\treturn 0;\n}';
    export const dir: string[] = ['.vscode', 'bin', 'include', 'lib', 'src'];
  }
}
