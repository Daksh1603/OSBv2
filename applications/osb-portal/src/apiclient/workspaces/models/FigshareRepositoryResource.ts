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
    RepositoryResourceBase,
    RepositoryResourceBaseFromJSON,
    RepositoryResourceBaseFromJSONTyped,
    RepositoryResourceBaseToJSON,
} from './';

/**
 * figshare repository resource
 * @export
 * @interface FigshareRepositoryResource
 */
export interface FigshareRepositoryResource {
    /**
     * file name
     * @type {string}
     * @memberof FigshareRepositoryResource
     */
    name?: string;
    /**
     * Download URL of the Resource
     * @type {string}
     * @memberof FigshareRepositoryResource
     */
    path?: string;
    /**
     * OSB Repository id
     * @type {number}
     * @memberof FigshareRepositoryResource
     */
    osbrepositoryId?: number;
}

export function FigshareRepositoryResourceFromJSON(json: any): FigshareRepositoryResource {
    return FigshareRepositoryResourceFromJSONTyped(json, false);
}

export function FigshareRepositoryResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): FigshareRepositoryResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'osbrepositoryId': !exists(json, 'osbrepository_id') ? undefined : json['osbrepository_id'],
    };
}

export function FigshareRepositoryResourceToJSON(value?: FigshareRepositoryResource | null): any {
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


