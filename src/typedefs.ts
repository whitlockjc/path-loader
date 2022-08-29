import {SuperAgentRequest, Response as SuperAgentResponse} from 'superagent';

export interface Response extends SuperAgentResponse {
  location: string;
}
export interface LoadCallback {
  (err: Error | null): void;
  (err: Error | null, data: string | SuperAgentResponse): void;
  (err: Error | null, data?: string | SuperAgentResponse): void;
}

export interface Loader {
  (location: string, options: LoadOptions, callback: LoadCallback);
}

/**
 * Options used when loading a path.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface LoadOptions<T = any> {
  /**
   * The encoding to use when loading the file *(File loader only)*
   */
  encoding?: BufferEncoding;
  /**
   * The HTTP method to use for the request *(HTTP loader only)*
   */
  method?: string;
  /**
   * The callback used to prepare the request *(HTTP loader only)*
   */
  prepareRequest?: PrepareRequestCallback;
  /**
   * The callback used to process the response
   */
  processContent?: ProcessResponseCallback<T>;
}

/**
 * Callback used to provide access to altering a remote request prior to the request being made.
 * @param req - The Superagent request object
 * @param location - The location being retrieved
 * @param callback - First callback
 */
export interface PrepareRequestCallback {
  (req: SuperAgentRequest, callback: RequestCallback): void;
  (req: SuperAgentRequest, location: string, callback: RequestCallback): void;
  (
    req: SuperAgentRequest,
    location: string | RequestCallback,
    callback?: RequestCallback
  ): void;
}

/**
 * Callback used to provide access to processing the raw response of the request being made. *(HTTP loader only)*
 * @param res - The Superagent response object *(For non-HTTP loaders, this object will be like the Superagent
 *        object in that it will have a `text` property whose value is the raw string value being processed.  This was done
 *        for consistency.  There will also be a `location` property containing the location of the path being loaded.)*
 * @param callback - Error-first callback
 * @returns the result of processing the responses
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProcessResponseCallback<T = any> = (
  res: Response,
  callback: ResponseCallback<T>
) => void;

export interface RequestCallback {
  (err: Error): void;
  (err: Error | null, req: SuperAgentRequest): void;
  (err: Error | null, req?: SuperAgentRequest): void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponseCallback<T = any> {
  (err: Error): void;
  (err: Error | null, data: T): void;
  (err: Error | null, data?: T): void;
}
