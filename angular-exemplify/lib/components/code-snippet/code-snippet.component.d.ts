import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WindowRef } from '../../services/window-ref.service';
import { Snippet } from '../../interfaces/snippet';
import { CodeHighlightService } from '../../services/code-highlight.service';
import { UtilitiesService } from '../../services/utilities.service';
import { ExemplifyTexts } from '../../interfaces/exemplify-texts';
export declare class CodeSnippetComponent implements OnDestroy {
    private _codeHighlight;
    private http;
    private windowRef;
    private utilities;
    texts: ExemplifyTexts;
    snippet: Snippet;
    code: string;
    isActive: boolean;
    parsedSnippet: string;
    copyNotice: string;
    showCopyNotice: boolean;
    private window;
    private _snippet;
    private $unsubscribe;
    private _defaultTexts;
    private _texts;
    constructor(_codeHighlight: CodeHighlightService, http: HttpClient, windowRef: WindowRef, utilities: UtilitiesService);
    /** Highlight, highlight code and update value of parsed snippet */
    highlight(code: string, lang: string): void;
    /** Get source code */
    private getSourceCode;
    /** Copy to clipboard */
    copyToClipboard: (text: string) => any;
    /** Toggle state for code snippet toolbar */
    toggleState(state?: boolean): void;
    ngOnDestroy(): void;
}
