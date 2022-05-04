import { InjectionToken } from "@angular/core"

export interface Token {
    type: 'text' | 'replacement',
    value: string,
}

export const TOKENIZER = new InjectionToken('Tokenizer');

export interface Tokenizer {
    tokenize(text: string): Token[];
}