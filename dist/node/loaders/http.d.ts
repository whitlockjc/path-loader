import { LoadCallback, LoadOptions } from '../typedefs';
/**
 * Loads a file from an http or https URL.
 *
 * @param  location - The document URL (If relative, location is relative to window.location.origin).
 * @param  options - The loader options
 * @param  callback - The error-first callback
 */
export declare function load(location: string, options: LoadOptions, callback: LoadCallback): void;
export declare function loadAsync(location: string, options: LoadOptions): Promise<string>;
