// Type definitions for d3JS d3-ease module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information

// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * Type for Easing Function
 */
export interface EasingFn extends Function {
    (normalizedTime: number): number;
}

// --------------------------------------------------------------------------
// Easing Functions
// --------------------------------------------------------------------------


export function easeLinear(normalizedTime: number):  number;

export function easeQuad(normalizedTime: number):  number;
export function easeQuadIn(normalizedTime: number):  number;
export function easeQuadOut(normalizedTime: number):  number;
export function easeQuadInOut(normalizedTime: number):  number;

export function easeCubic(normalizedTime: number):  number;
export function easeCubicIn(normalizedTime: number):  number;
export function easeCubicOut(normalizedTime: number):  number;
export function easeCubicInOut(normalizedTime: number):  number;

export function easePoly(normalizedTime: number):  number;
export function easePolyIn(normalizedTime: number):  number;
export function easePolyOut(normalizedTime: number):  number;
export function easePolyInOut(normalizedTime: number):  number;

export function easeSin(normalizedTime: number):  number;
export function easeSinIn(normalizedTime: number):  number;
export function easeSinOut(normalizedTime: number):  number;
export function easeSinInOut(normalizedTime: number):  number;

export function easeExp(normalizedTime: number):  number;
export function easeExpIn(normalizedTime: number):  number;
export function easeExpOut(normalizedTime: number):  number;
export function easeExpInOut(normalizedTime: number):  number;

export function easeCircle(normalizedTime: number):  number;
export function easeCircleIn(normalizedTime: number):  number;
export function easeCircleOut(normalizedTime: number):  number;
export function easeCircleInOut(normalizedTime: number):  number;

export function easeBounce(normalizedTime: number):  number;
export function easeBounceIn(normalizedTime: number):  number;
export function easeBounceOut(normalizedTime: number):  number;
export function easeBounceInOut(normalizedTime: number):  number;

export function easeBack(normalizedTime: number):  number;
export function easeBackIn(normalizedTime: number):  number;
export function easeBackOut(normalizedTime: number):  number;
export function easeBackInOut(normalizedTime: number):  number;

export function easeElastic(normalizedTime: number):  number;
export function easeElasticIn(normalizedTime: number):  number;
export function easeElasticOut(normalizedTime: number):  number;
export function easeElasticInOut(normalizedTime: number):  number;