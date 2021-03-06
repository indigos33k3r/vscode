/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerEditorAction, registerEditorCommand, registerEditorContribution } from 'vs/editor/browser/editorExtensions';
import { CodeActionCommand, OrganizeImportsAction, QuickFixAction, RefactorAction, SourceAction, AutoFixAction } from 'vs/editor/contrib/codeAction/codeActionCommands';
import { CodeActionController } from 'vs/editor/contrib/codeAction/codeActionController';

registerEditorContribution(CodeActionController);
registerEditorAction(QuickFixAction);
registerEditorAction(RefactorAction);
registerEditorAction(SourceAction);
registerEditorAction(OrganizeImportsAction);
registerEditorAction(AutoFixAction);
registerEditorCommand(new CodeActionCommand());
