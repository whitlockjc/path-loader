import { LoadCallback, LoadOptions } from '../typedefs';
/**
 * Loads a file from the filesystem.
 *
 * @param location - The filesystem location (If relative, location is relative to process.cwd()).
 * @param options - The loader options (Unused)
 * @param callback - The error-first callback
 */
export declare function load(location: string, options: LoadOptions, callback: LoadCallback): void;
export declare function loadAsync(location: string, options: LoadOptions): Promise<string>;
