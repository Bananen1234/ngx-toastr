import { OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';
import { Snippet } from '../../interfaces/snippet';
import { ExemplifyTexts } from '../../interfaces/exemplify-texts';
export declare class ExemplifyComponent implements OnChanges {
    private viewContainerRef;
    private utilities;
    texts: ExemplifyTexts;
    escapeStrings: Array<string>;
    show: boolean;
    sources: Array<Snippet>;
    selector: string;
    private _escapeStrings;
    private _sources;
    private _show;
    private _selector;
    private _defaultTexts;
    private _texts;
    activeSnippet: Snippet;
    constructor(viewContainerRef: ViewContainerRef, utilities: UtilitiesService);
    setActiveSnippet(snippet: Snippet): void;
    ngOnChanges(changes: SimpleChanges): void;
    compareFn(o1: Snippet, o2: Snippet): boolean;
    private addSnippet;
    private escapeString;
}
