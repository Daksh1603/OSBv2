/* tslint:disable */
/* eslint-disable */
/**
 * Workspaces manager API
 * Opensource Brain Platform - Reference Workspaces manager API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Figshare repository
 * @export
 * @interface FigshareRepository
 */
export interface FigshareRepository {
    /**
     * 
     * @type {number}
     * @memberof FigshareRepository
     */
    id?: number;
    /**
     * URL of the figshare repository
     * @type {string}
     * @memberof FigshareRepository
     */
    url: string;
}

export function FigshareRepositoryFromJSON(json: any): FigshareRepository {
    return FigshareRepositoryFromJSONTyped(json, false);
}

export function FigshareRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FigshareRepository {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'url': json['url'],
    };
}

export function FigshareRepositoryToJSON(value?: FigshareRepository | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'url': value.url,
    };
}


