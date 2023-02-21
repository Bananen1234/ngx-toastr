import { Observable } from 'rxjs';
export interface Snippet {
    src: string;
    name: string;
    lang?: string;
    code?: Observable<string>;
    isActive?: boolean;
    selector?: string;
}
