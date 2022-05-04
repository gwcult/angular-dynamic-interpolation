import { Directive, Inject, Input, OnChanges, OnDestroy, Self, SimpleChanges, TemplateRef } from '@angular/core';
import { REPLACEMENT_MAP } from '../interpolation/interpolation.component';
import { MultiMap } from '../interpolation/multi-map';

@Directive({
  selector: '[dipReplacement]'
})
export class ReplacementDirective implements OnChanges, OnDestroy {
  @Input('dipReplacement') tag: string = '';

  constructor(
    @Self() private template: TemplateRef<void>,
    @Inject(REPLACEMENT_MAP) private replacementsMap: MultiMap<string, TemplateRef<void>>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.replacementsMap.delete(changes['tag'].previousValue, this.template);
    this.replacementsMap.push(changes['tag'].currentValue, this.template);
  }

  ngOnDestroy(): void {
    this.replacementsMap.delete(this.tag, this.template);
  }
}
