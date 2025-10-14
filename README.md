<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Correlation Test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a Pearson product-moment correlation test between paired samples.



<section class="usage">

## Usage

```javascript
import pcorrtest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-pcorrtest@esm/index.mjs';
```

#### pcorrtest( x, y\[, opts] )

By default, the function performs a t-test for the null hypothesis that the paired data in [arrays][mdn-array] or [typed arrays][mdn-typed-array] `x` and `y` have a [Pearson correlation coefficient][pearson-correlation] of zero.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y );
/* e.g., returns
    {
        'alpha': 0.05,
        'rejected': true,
        'pValue': ~0.006,
        'statistic': ~3.709,
        'ci': [ ~0.332, ~0.95 ],
        'nullValue': 0,
        'pcorr': ~0.795,
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0

        pValue: 0.006
        statistic: 3.709
        95% confidence interval: [0.3315,0.9494]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that `x` has a larger mean than `y` (`greater`), `x` has a smaller mean than `y` (`less`) or the means are the same (`two-sided`). Default: `two-sided`.
-   **rho**: `number` denoting the correlation between the `x` and `y` variables under the null hypothesis. Default: `0`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'alpha': 0.1
});
var table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0

        pValue: 0.006
        statistic: 3.709
        90% confidence interval: [0.433,0.9363]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'alternative': 'less'
});
var table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is less than 0

        pValue: 0.997
        statistic: 3.709
        95% confidence interval: [-1,0.9363]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

out = pcorrtest( x, y, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    t-test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is greater than 0

        pValue: 0.003
        statistic: 3.709
        95% confidence interval: [0.433,1]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/
```

To test whether the correlation coefficient is equal to some other value than `0`, set the `rho` option. Hypotheses tests for correlation coefficients besides zero are carried out using the [Fisher z-transformation][fisher-transform].

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = pcorrtest( x, y, {
    'rho': 0.8
});
/* e.g., returns
    {
        'alpha': 0.05,
        'rejected': false,
        'pValue': ~0.972,
        'statistic': ~-0.035,
        'ci': [ ~0.332, ~0.949 ],
        'nullValue': 0.8,
        'pcorr': ~0.795,
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    Fisher's z transform test for Pearson correlation coefficient

    Alternative hypothesis: True correlation coefficient is not equal to 0.8

        pValue: 0.972
        statistic: -0.0351
        95% confidence interval: [0.3315,0.9494]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import rnorm from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@esm/index.mjs';
import sqrt from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs';
import pcorrtest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-pcorrtest@esm/index.mjs';

var table;
var out;
var rho;
var x;
var y;
var i;

rho = 0.5;
x = new Array( 300 );
y = new Array( 300 );
for ( i = 0; i < 300; i++ ) {
    x[ i ] = rnorm( 0.0, 1.0 );
    y[ i ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
}

out = pcorrtest( x, y );
table = out.print();
console.log( table );

out = pcorrtest( x, y, {
    'rho': 0.5
});
table = out.print();
console.log( table );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-pcorrtest.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-pcorrtest

[test-image]: https://github.com/stdlib-js/stats-pcorrtest/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-pcorrtest/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-pcorrtest/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-pcorrtest?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-pcorrtest.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-pcorrtest/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-pcorrtest/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-pcorrtest/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-pcorrtest/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-pcorrtest/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-pcorrtest/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-pcorrtest/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-pcorrtest/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-pcorrtest/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[fisher-transform]: https://en.wikipedia.org/wiki/Fisher_transformation

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
