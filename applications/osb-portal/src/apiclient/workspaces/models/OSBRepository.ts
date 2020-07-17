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
import {
    VolumeStorage,
    VolumeStorageFromJSON,
    VolumeStorageFromJSONTyped,
    VolumeStorageToJSON,
    WorkspaceResource,
    WorkspaceResourceFromJSON,
    WorkspaceResourceFromJSONTyped,
    WorkspaceResourceToJSON,
} from './';

/**
 * Opensource brain repository
 * @export
 * @interface OSBRepository
 */
export interface OSBRepository {
    /**
     * 
     * @type {number}
     * @memberof OSBRepository
     */
    id?: number;
    /**
     * Universally unique identifier of the OSB repository
     * @type {string}
     * @memberof OSBRepository
     */
    uuid: string;
    /**
     * OSB repository name
     * @type {string}
     * @memberof OSBRepository
     */
    name: string;
    /**
     * 
     * @type {VolumeStorage}
     * @memberof OSBRepository
     */
    storage: VolumeStorage;
    /**
     * 
     * @type {Array<WorkspaceResource>}
     * @memberof OSBRepository
     */
    resources?: Array<WorkspaceResource>;
}

export function OSBRepositoryFromJSON(json: any): OSBRepository {
    return OSBRepositoryFromJSONTyped(json, false);
}

export function OSBRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSBRepository {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'uuid': json['uuid'],
        'name': json['name'],
        'storage': VolumeStorageFromJSON(json['storage']),
        'resources': !exists(json, 'resources') ? undefined : ((json['resources'] as Array<any>).map(WorkspaceResourceFromJSON)),
    };
}

export function OSBRepositoryToJSON(value?: OSBRepository | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'uuid': value.uuid,
        'name': value.name,
        'storage': VolumeStorageToJSON(value.storage),
        'resources': value.resources === undefined ? undefined : ((value.resources as Array<any>).map(WorkspaceResourceToJSON)),
    };
}


