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
    ResourceOrigin,
    ResourceOriginFromJSON,
    ResourceOriginFromJSONTyped,
    ResourceOriginToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkspaceResourceAllOf
 */
export interface WorkspaceResourceAllOf {
    /**
     * workspace_id
     * @type {number}
     * @memberof WorkspaceResourceAllOf
     */
    workspaceId?: number;
    /**
     * 
     * @type {ResourceOrigin}
     * @memberof WorkspaceResourceAllOf
     */
    origin?: ResourceOrigin;
}

export function WorkspaceResourceAllOfFromJSON(json: any): WorkspaceResourceAllOf {
    return WorkspaceResourceAllOfFromJSONTyped(json, false);
}

export function WorkspaceResourceAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceResourceAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workspaceId': !exists(json, 'workspace_id') ? undefined : json['workspace_id'],
        'origin': !exists(json, 'origin') ? undefined : ResourceOriginFromJSON(json['origin']),
    };
}

export function WorkspaceResourceAllOfToJSON(value?: WorkspaceResourceAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workspace_id': value.workspaceId,
        'origin': ResourceOriginToJSON(value.origin),
    };
}

