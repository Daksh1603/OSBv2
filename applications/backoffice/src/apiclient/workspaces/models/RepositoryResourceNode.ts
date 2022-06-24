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
    RepositoryResource,
    RepositoryResourceFromJSON,
    RepositoryResourceFromJSONTyped,
    RepositoryResourceToJSON,
} from '.';

/**
 * Tree node (files/folders) of a Repository tree
 * @export
 * @interface RepositoryResourceNode
 */
export interface RepositoryResourceNode {
    /**
     * 
     * @type {RepositoryResource}
     * @memberof RepositoryResourceNode
     */
    resource?: RepositoryResource;
    /**
     * 
     * @type {Array<RepositoryResourceNode>}
     * @memberof RepositoryResourceNode
     */
    children?: Array<RepositoryResourceNode>;
}

export function RepositoryResourceNodeFromJSON(json: any): RepositoryResourceNode {
    return RepositoryResourceNodeFromJSONTyped(json, false);
}

export function RepositoryResourceNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepositoryResourceNode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource': !exists(json, 'resource') ? undefined : RepositoryResourceFromJSON(json['resource']),
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(RepositoryResourceNodeFromJSON)),
    };
}

export function RepositoryResourceNodeToJSON(value?: RepositoryResourceNode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource': RepositoryResourceToJSON(value.resource),
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(RepositoryResourceNodeToJSON)),
    };
}


