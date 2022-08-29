export * from './typedefs';
import { LoadOptions } from './typedefs';
import { Response as SuperAgentResponse } from 'superagent';
/**
 * Loads a document at the provided location and returns a JavaScript object representation.
 *
 * @param {string} location - The location to the document
 * @param {module:path-loader.LoadOptions} [options] - The loader options
 *
 * @returns {Promise<*>} Always returns a promise even if there is a callback provided
 *
 * @example
 * // Example using Promises
 *
 * PathLoader
 *   .load('./package.json')
 *   .then(JSON.parse)
 *   .then(function (document) {
 *     console.log(document.name + ' (' + document.version + '): ' + document.description);
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 *
 * @example
 * // Example using options.prepareRequest to provide authentication details for a remotely secure URL
 *
 * PathLoader
 *   .load('https://api.github.com/repos/whitlockjc/path-loader', {
 *     prepareRequest: function (req, callback) {
 *       req.auth('my-username', 'my-password');
 *       callback(undefined, req);
 *     }
 *   })
 *   .then(JSON.parse)
 *   .then(function (document) {
 *     console.log(document.full_name + ': ' + document.description);
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 *
 * @example
 * // Example loading a YAML file
 *
 * PathLoader
 *   .load('/Users/not-you/projects/path-loader/.travis.yml')
 *   .then(YAML.safeLoad)
 *   .then(function (document) {
 *     console.log('path-loader uses the', document.language, 'language.');
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 *
 * @example
 * // Example loading a YAML file with options.processContent (Useful if you need information in the raw response)
 *
 * PathLoader
 *   .load('/Users/not-you/projects/path-loader/.travis.yml', {
 *     processContent: function (res, callback) {
 *       callback(YAML.safeLoad(res.text));
 *     }
 *   })
 *   .then(function (document) {
 *     console.log('path-loader uses the', document.language, 'language.');
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 */
declare type LoaderReturn<T> = [T] extends [never] ? (string | SuperAgentResponse) : T;
export declare function load<T = never>(location: string, options?: LoadOptions<LoaderReturn<T>>): Promise<LoaderReturn<T>>;
