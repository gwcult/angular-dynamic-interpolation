import { Component, Inject, InjectionToken, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { Token, Tokenizer, TOKENIZER } from '../tokenizer/tokenizer';
import { MultiMap } from './multi-map';

export const REPLACEMENT_MAP = new InjectionToken<MultiMap<string, TemplateRef<void>>>('ReplacementMap');

@Component({
  selector: 'dip-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
  providers: [
    { provide: REPLACEMENT_MAP, useClass: MultiMap }
  ]
})
export class InterpolationComponent implements OnChanges {
  @Input() template: string | undefined | null;

  #tokens: Token[] = [];

  constructor(
    @Inject(REPLACEMENT_MAP) private replacementsMap: MultiMap<string, TemplateRef<void>>,
    @Inject(TOKENIZER) private tokenizer: Tokenizer,
  ) { }

  get tokens() {
    return this.#tokens;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['template']) {
      this.#tokens = this.tokenizer.tokenize(this.template || '');
    }
  }

  getReplacements(tag: string): TemplateRef<void>[] {
    return this.replacementsMap.getAll(tag);
  }
}
