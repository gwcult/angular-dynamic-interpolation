# Angular Dynamic Interpolation

A simple library that replaces string placeholders with angular ng-templates.

## Requirements

Angular 13+

## Example

```html
<!-- components.html -->

<dip-interpolation [template]="'FOO {{ BUTTON }} BAR'">
  <button *dipReplacement="'BUTTON'">FOOBAR</button>
</dip-interpolation>

<!-- result -->
FOO <button>FOOBAR</button> BAR
```

## Configuration

```js
//module.ts

@NgModule({
    ...
    imports: [
        ...
        DynamicInterpolationModule.forRoot({
            //Placeholder names should be matched in regex group
            //The following example will match e.g. %%VARIABLE%%
            regex: /%%(.*?)%%/
        })
    ]
})

```