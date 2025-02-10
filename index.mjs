// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array-like@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-quantile@v0.2.2-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-cdf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atanh@v0.2.3-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tanh@v0.2.3-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-cdf@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-variance@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-mean@v0.2.2-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.2-esm/index.mjs";function y(e){var t,s,i;if(s=4,t=!0,arguments.length>0){if(!p(e))throw new TypeError(n("1Ln3L",e));if(v(e,"digits")){if(!m(e.digits))throw new TypeError(n("1Ln3P","digits",e.digits));s=e.digits}if(v(e,"decision")){if(!c(e.decision))throw new TypeError(n("1Ln2o","decision",e.decision));t=e.decision}}switch(i="",i+=this.method,i+="\n\n",i+="Alternative hypothesis: ",i+="True correlation coefficient is ",this.alternative){case"less":i+="less than ";break;case"greater":i+="greater than ";break;default:i+="not equal to "}return i+=this.nullValue,i+="\n\n",i+="    pValue: "+j(this.pValue,-s)+"\n",i+="    statistic: "+j(this.statistic,-s)+"\n",i+="    "+100*(1-this.alpha)+"% confidence interval: ["+j(this.ci[0],-s)+","+j(this.ci[1],-s)+"]",i+="\n\n",t&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":i+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",i+="\n"),i}var L=["two-sided","less","greater"];var E=i(0,1),T=r(0,1);function k(i,r,m){var c,j,k,V,P,R,q,F,A,D,z,H,S,B,C,G;if(!t(i)&&!e(i))throw new TypeError(n("1Ln8R",i));if(!t(r)&&!e(r))throw new TypeError(n("1Ln9k",r));if((B=i.length)!==r.length)throw new RangeError(n("1Ln1F"));if(V={},m&&(F=function(e,t){return p(t)?v(t,"alpha")&&(e.alpha=t.alpha,!u(e.alpha)||w(e.alpha)||e.alpha<0||e.alpha>1)?new TypeError(n("1LnDR","alpha",e.alpha)):v(t,"alternative")&&(e.alternative=t.alternative,-1===x(L,e.alternative))?new TypeError(n("1Ln4S","alternative",L.join('", "'),e.alternative)):v(t,"rho")&&(e.rho=t.rho,!u(e.rho)||w(e.rho)||e.rho<-1||e.rho>1)?new TypeError(n("1LnA1","rho",e.rho)):null:new TypeError(n("1Ln2V",t))}(V,m),F))throw F;if(j=void 0===V.alpha?.05:V.alpha,B<4)throw new Error(n("1Ln1H"));if(D=void 0===V.rho?0:V.rho,q=void 0===V.alternative?"two-sided":V.alternative,C=function(e,t){var s,i,r,n,a,o,l;for(l=e.length,n=g(l,e,1),a=g(l,t,1),r=0,o=0;o<l;o++)r+=e[o]*t[o];return i=r-l*n*a,s=(l-1)*d(b(l,1,e,1))*d(b(l,1,t,1)),f(h(i/s,1),-1)}(i,r),G=a(C),S=1/d(B-3),0===D)switch(c="t-test for Pearson correlation coefficient",R=d(H=B-2)*C/d(1-C*C),q){case"greater":P=1-l(R,H);break;case"less":P=l(R,H);break;default:P=2*h(l(R,H),1-l(R,H))}else switch(c="Fisher's z transform test for Pearson correlation coefficient",R=(G-a(D))*d(B-3),q){case"greater":P=T(-R);break;case"less":P=1-T(-R);break;default:P=2*h(T(-R),1-T(-R))}switch(q){case"greater":k=[o(G-S*E(1-j)),1];break;case"less":k=[-1,o(G+S*E(1-j))];break;default:z=S*E(1-j/2),k=[o(G-z),o(G+z)]}return s(A={},"rejected",P<=j),s(A,"alpha",j),s(A,"pValue",P),s(A,"statistic",R),s(A,"ci",k),s(A,"alternative",q),s(A,"method",c),s(A,"nullValue",D),s(A,"pcorr",C),s(A,"print",y),A}export{k as default};
//# sourceMappingURL=index.mjs.map
