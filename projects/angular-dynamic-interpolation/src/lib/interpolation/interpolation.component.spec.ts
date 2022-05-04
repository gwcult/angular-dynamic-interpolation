import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplacementDirective } from '../replacement/replacement.directive';
import { DoubleBracketsConfiguration, RegexTokenizer } from '../tokenizer/regex-tokenizer';
import { TOKENIZER } from '../tokenizer/tokenizer';

import { InterpolationComponent, REPLACEMENT_MAP } from './interpolation.component';
import { MultiMap } from './multi-map';

@Component({
  template: `
    <dip-interpolation [template]="template">
      <button *dipReplacement="'BUTTON'">BUTTON</button>
    </dip-interpolation>
`
})
class WrapperComponent {
  template = '';
}

describe('InterpolationComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapperElement: HTMLElement;
  let interpolationElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        ReplacementDirective,
        InterpolationComponent,
      ],
      providers: [
        { provide: TOKENIZER, useValue: new RegexTokenizer(DoubleBracketsConfiguration) },
        { provide: REPLACEMENT_MAP, useClass: MultiMap },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    wrapperElement = fixture.nativeElement
    interpolationElement = wrapperElement.querySelector('dip-interpolation') as HTMLElement;
    fixture.detectChanges();
  });

  it('should have text and button element', () => {
    component.template = 'TEXT1 {{ BUTTON }} TEXT2';
    fixture.detectChanges();
    expect(interpolationElement.querySelector('button')?.textContent).toEqual('BUTTON');
    expect(interpolationElement.textContent).toEqual('TEXT1 BUTTON TEXT2');
  });
});
