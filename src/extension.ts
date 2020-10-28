
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('Workspace Contains "compile_commands.json"');
}

export function deactivate() { }
