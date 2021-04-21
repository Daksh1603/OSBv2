/* tslint:disable */
/* eslint-disable */
/**
 * Workspaces manager API
 * Opensource Brain Platform - Reference Workspaces manager API
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Repository Content type:
 *   * experimental - Experimental data
 *   * modeling - Modeling
 * @export
 * @enum {string}
 */
export enum RepositoryContentType {
    Experimental = 'experimental',
    Modeling = 'modeling'
}

export function RepositoryContentTypeFromJSON(json: any): RepositoryContentType {
    return RepositoryContentTypeFromJSONTyped(json, false);
}

export function RepositoryContentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryContentType {
    return json as RepositoryContentType;
}

export function RepositoryContentTypeToJSON(value?: RepositoryContentType | null): any {
    return value as any;
}

