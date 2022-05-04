import { DoubleBracketsConfiguration, RegexTokenizer } from './regex-tokenizer';

describe('RegexTokenizer', () => {
  const service: RegexTokenizer = new RegexTokenizer(DoubleBracketsConfiguration);

  it('should tokenize correctly', () => {
    const template = `{{ TAG1 }} TEXT1 {{TAG2}} TEXT2 {{ TAG3 }}`;
    const tokens = service.tokenize(template);
    expect(tokens).toEqual([
      {type: 'replacement', value: 'TAG1'},
      {type: 'text', value: ' TEXT1 '},
      {type: 'replacement', value: 'TAG2'},
      {type: 'text', value: ' TEXT2 '},
      {type: 'replacement', value: 'TAG3'},
    ])
  });
});
