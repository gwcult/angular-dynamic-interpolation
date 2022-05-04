import { Token, Tokenizer } from './tokenizer';

export const DoubleBracketsConfiguration: RegexTokenizerConfiguration = {
  regex: /{{\s*(.+?)\s*}}/,
}

export interface RegexTokenizerConfiguration {
  readonly regex: RegExp
}

export class RegexTokenizer implements Tokenizer {

  constructor(private configuration: RegexTokenizerConfiguration) { }

  tokenize(text: string): Token[] {
    return text.split(this.configuration.regex)
      .map((val, i) => ({
        type: i % 2 === 0 ? 'text' as const : 'replacement' as const,
        value: val
      }))
      .filter(t => t.value !== '')
  }
}
