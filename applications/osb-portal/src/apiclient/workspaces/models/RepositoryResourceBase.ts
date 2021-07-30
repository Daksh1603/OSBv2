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
import {
    RepositoryResourceBaseAllOf,
    RepositoryResourceBaseAllOfFromJSON,
    RepositoryResourceBaseAllOfFromJSONTyped,
    RepositoryResourceBaseAllOfToJSON,
    ResourceBase,
    ResourceBaseFromJSON,
    ResourceBaseFromJSONTyped,
    ResourceBaseToJSON,
} from './';

/**
 * Resource (files/folders) of an OSBRepository
 * @export
 * @interface RepositoryResourceBase
 */
export interface RepositoryResourceBase {
    /**
     * file name
     * @type {string}
     * @memberof RepositoryResourceBase
     */
    name?: string;
    /**
     * Download URL of the Resource
     * @type {string}
     * @memberof RepositoryResourceBase
     */
    path?: string;
    /**
     * OSB Repository id
     * @type {number}
     * @memberof RepositoryResourceBase
     */
    osbrepositoryId?: number;
}

export function RepositoryResourceBaseFromJSON(json: any): RepositoryResourceBase {
    return RepositoryResourceBaseFromJSONTyped(json, false);
}

export function RepositoryResourceBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryResourceBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'osbrepositoryId': !exists(json, 'osbrepository_id') ? undefined : json['osbrepository_id'],
    };
}

export function RepositoryResourceBaseToJSON(value?: RepositoryResourceBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'path': value.path,
        'osbrepository_id': value.osbrepositoryId,
    };
}


