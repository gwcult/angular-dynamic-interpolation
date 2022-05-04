import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ReplacementDirective } from './replacement/replacement.directive';
import { DoubleBracketsConfiguration, RegexTokenizer, RegexTokenizerConfiguration } from './tokenizer/regex-tokenizer';
import { TOKENIZER } from './tokenizer/tokenizer';

export type DynamicInterpolationModuleConfiguration = RegexTokenizerConfiguration;

@NgModule({
  declarations: [
    InterpolationComponent,
    ReplacementDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    InterpolationComponent,
    ReplacementDirective,
  ]
})
export class DynamicInterpolationModule {
  static forRoot(
    config: DynamicInterpolationModuleConfiguration = DoubleBracketsConfiguration
  ): ModuleWithProviders<DynamicInterpolationModule> {
    return {
      ngModule: DynamicInterpolationModule,
      providers: [
        { provide: TOKENIZER, useValue: new RegexTokenizer(config) }
      ],
    };
  }
}
