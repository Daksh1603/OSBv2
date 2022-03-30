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
    WorkspaceResourceEntity,
    WorkspaceResourceEntityFromJSON,
    WorkspaceResourceEntityFromJSONTyped,
    WorkspaceResourceEntityToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkspaceEntityAllOf
 */
export interface WorkspaceEntityAllOf {
    /**
     * Resources of the workspace
     * @type {Array<WorkspaceResourceEntity>}
     * @memberof WorkspaceEntityAllOf
     */
    resources?: Array<WorkspaceResourceEntity>;
}

export function WorkspaceEntityAllOfFromJSON(json: any): WorkspaceEntityAllOf {
    return WorkspaceEntityAllOfFromJSONTyped(json, false);
}

export function WorkspaceEntityAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceEntityAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resources': !exists(json, 'resources') ? undefined : ((json['resources'] as Array<any>).map(WorkspaceResourceEntityFromJSON)),
    };
}

export function WorkspaceEntityAllOfToJSON(value?: WorkspaceEntityAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resources': value.resources === undefined ? undefined : ((value.resources as Array<any>).map(WorkspaceResourceEntityToJSON)),
    };
}

