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

import { exists, mapValues } from '../runtime';
/**
 * GIT repository
 * @export
 * @interface GITRepository
 */
export interface GITRepository {
    /**
     * 
     * @type {number}
     * @memberof GITRepository
     */
    id?: number;
    /**
     * Public key of the git repository
     * @type {string}
     * @memberof GITRepository
     */
    publicKey: string;
    /**
     * Public key of the git repository
     * @type {string}
     * @memberof GITRepository
     */
    privateKey: string;
    /**
     * URL of the git repository
     * @type {string}
     * @memberof GITRepository
     */
    url: string;
}

export function GITRepositoryFromJSON(json: any): GITRepository {
    return GITRepositoryFromJSONTyped(json, false);
}

export function GITRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): GITRepository {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'publicKey': json['public_key'],
        'privateKey': json['private_key'],
        'url': json['url'],
    };
}

export function GITRepositoryToJSON(value?: GITRepository | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'public_key': value.publicKey,
        'private_key': value.privateKey,
        'url': value.url,
    };
}

