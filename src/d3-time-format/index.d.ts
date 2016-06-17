// Type definitions for d3JS d3-time-format module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Clean-up header for proper referencing of new project/module information
// TODO: Explanatory comments for exports


/**
 * Specification of time locale to use when creating a new TimeLocaleObject
 */
export interface TimeLocale {
    /**
     * The date and time (%c) format specifier (e.g., "%a %b %e %X %Y").
     */
    dateTime: string;
    /**
     * The date (%x) format specifier (e.g., "%m/%d/%Y").
     */
    date: string;
    /**
     *  The time (%X) format specifier (e.g., "%H:%M:%S").
     */
    time: string;
    /**
     * The A.M. and P.M. equivalents (e.g., ["AM", "PM"]).
     */
    periods: [string, string];
    /**
     * The full names of the weekdays, starting with Sunday.
     */
    days: [string, string, string, string, string, string, string];
    /**
     * The abbreviated names of the weekdays, starting with Sunday.
     */
    shortDays: [string, string, string, string, string, string, string];
    /**
     * The full names of the months (starting with January).
     */
    months: [string, string, string, string, string, string, string, string, string, string, string, string];
    /**
     * the abbreviated names of the months (starting with January).
     */
    shortMonths: [string, string, string, string, string, string, string, string, string, string, string, string];
}


export interface TimeLocaleObject {
    format(specifier: string): (date: Date) => string;
    parse(specifier: string): (dateString: string) => Date | null;
    utcFormat(specifier: string): (date: Date) => string;
    utcParse(specifier: string): (dateString: string) => Date | null;
}

/**
 * Create a new time-locale-based object which exposes time-formatting
 * methods for the specified locale.
 */
export function timeFormatLocale(timeLocale: TimeLocale): TimeLocaleObject;

export function timeFormat(specifier: string): (date: Date) => string;

export function timeParse(specifier: string): (dateString: string) => Date | null;

export function utcFormat(specifier: string): (date: Date) => string;

export function utcParse(specifier: string): (dateString: string) => Date | null;



export function isoFormat(date: Date): string;

export function isoParse(dateString: string): Date;