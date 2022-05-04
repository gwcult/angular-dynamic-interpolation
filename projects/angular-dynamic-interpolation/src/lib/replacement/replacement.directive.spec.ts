import { TemplateRef } from '@angular/core';
import { MultiMap } from '../interpolation/multi-map';
import { ReplacementDirective } from './replacement.directive';

describe('ReplacementDirective', () => {
  let directive: ReplacementDirective;
  let map: MultiMap<string, TemplateRef<void>>;

  beforeEach(async () => {
    map = new MultiMap();
    directive = new ReplacementDirective('TEMPLATE' as any, map);
  });

  it('should update map on change', () => {
    directive.ngOnChanges({tag: {previousValue: undefined, currentValue: 'TAG1'} as any});
    directive.ngOnChanges({tag: {previousValue: 'TAG1', currentValue: 'TAG2'} as any});
    expect(map.getAll('TAG1')).toEqual([]);
    expect(map.getAll('TAG2')).toEqual(['TEMPLATE'] as any);
  });

  it('should update map on destroy', () => {
    directive.tag = 'TAG1';
    directive.ngOnChanges({tag: {previousValue: undefined, currentValue: 'TAG1'} as any});
    directive.ngOnDestroy();
    expect(map.getAll('TAG1')).toEqual([]);
  })
});
