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
    OSBRepositoryAllOf,
    OSBRepositoryAllOfFromJSON,
    OSBRepositoryAllOfFromJSONTyped,
    OSBRepositoryAllOfToJSON,
    OSBRepositoryContext,
    OSBRepositoryContextFromJSON,
    OSBRepositoryContextFromJSONTyped,
    OSBRepositoryContextToJSON,
    RepositoryBase,
    RepositoryBaseFromJSON,
    RepositoryBaseFromJSONTyped,
    RepositoryBaseToJSON,
    RepositoryResourceNode,
    RepositoryResourceNodeFromJSON,
    RepositoryResourceNodeFromJSONTyped,
    RepositoryResourceNodeToJSON,
    RepositoryType,
    RepositoryTypeFromJSON,
    RepositoryTypeFromJSONTyped,
    RepositoryTypeToJSON,
} from './';

/**
 * 
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
     * Repository name.
     * @type {string}
     * @memberof OSBRepository
     */
    name: string;
    /**
     * 
     * @type {RepositoryType}
     * @memberof OSBRepository
     */
    repositoryType: RepositoryType;
    /**
     * Comma separated set of Repository Content Types
     * @type {string}
     * @memberof OSBRepository
     */
    repositoryContentTypes: string;
    /**
     * Auto sync of the resources
     * @type {boolean}
     * @memberof OSBRepository
     */
    autoSync: boolean;
    /**
     * URI of the repository
     * @type {string}
     * @memberof OSBRepository
     */
    uri: string;
    /**
     * Repository keycloak user id, will be automatically be set to the logged in user
     * @type {string}
     * @memberof OSBRepository
     */
    userId?: string;
    /**
     * List of contexts with used/referenced resources in this repository
     * @type {Array<OSBRepositoryContext>}
     * @memberof OSBRepository
     */
    usedContexts?: Array<OSBRepositoryContext>;
    /**
     * List of repository resources
     * @type {Array<RepositoryResourceNode>}
     * @memberof OSBRepository
     */
    contextResources?: Array<RepositoryResourceNode>;
    /**
     * List of repository contexts
     * @type {Array<string>}
     * @memberof OSBRepository
     */
    allContexts?: Array<string>;
    /**
     * Repository description
     * @type {string}
     * @memberof OSBRepository
     */
    description?: string;
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
        'name': json['name'],
        'repositoryType': RepositoryTypeFromJSON(json['repository_type']),
        'repositoryContentTypes': json['repository_content_types'],
        'autoSync': json['auto_sync'],
        'uri': json['uri'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'usedContexts': !exists(json, 'used_contexts') ? undefined : ((json['used_contexts'] as Array<any>).map(OSBRepositoryContextFromJSON)),
        'contextResources': !exists(json, 'context_resources') ? undefined : ((json['context_resources'] as Array<any>).map(RepositoryResourceNodeFromJSON)),
        'allContexts': !exists(json, 'all_contexts') ? undefined : json['all_contexts'],
        'description': !exists(json, 'description') ? undefined : json['description'],
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
        'name': value.name,
        'repository_type': RepositoryTypeToJSON(value.repositoryType),
        'repository_content_types': value.repositoryContentTypes,
        'auto_sync': value.autoSync,
        'uri': value.uri,
        'user_id': value.userId,
        'used_contexts': value.usedContexts === undefined ? undefined : ((value.usedContexts as Array<any>).map(OSBRepositoryContextToJSON)),
        'context_resources': value.contextResources === undefined ? undefined : ((value.contextResources as Array<any>).map(RepositoryResourceNodeToJSON)),
        'all_contexts': value.allContexts,
        'description': value.description,
    };
}


