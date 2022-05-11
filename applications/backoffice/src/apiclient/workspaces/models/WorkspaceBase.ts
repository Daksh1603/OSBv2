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
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
    VolumeStorage,
    VolumeStorageFromJSON,
    VolumeStorageFromJSONTyped,
    VolumeStorageToJSON,
    WorkspaceCollaborator,
    WorkspaceCollaboratorFromJSON,
    WorkspaceCollaboratorFromJSONTyped,
    WorkspaceCollaboratorToJSON,
    WorkspaceImage,
    WorkspaceImageFromJSON,
    WorkspaceImageFromJSONTyped,
    WorkspaceImageToJSON,
} from '.';

/**
 * Workspace item
 * @export
 * @interface WorkspaceBase
 */
export interface WorkspaceBase {
    /**
     * 
     * @type {number}
     * @memberof WorkspaceBase
     */
    id?: number;
    /**
     * Workspace name.
     * @type {string}
     * @memberof WorkspaceBase
     */
    name: string;
    /**
     * Workspace description.
     * @type {string}
     * @memberof WorkspaceBase
     */
    description: string;
    /**
     * Date/time the Workspace is created
     * @type {Date}
     * @memberof WorkspaceBase
     */
    timestampCreated?: Date;
    /**
     * Date/time the Workspace is last updated
     * @type {Date}
     * @memberof WorkspaceBase
     */
    timestampUpdated?: Date;
    /**
     * The workspace resource id the workspace is opened last with
     * @type {number}
     * @memberof WorkspaceBase
     */
    lastOpenedResourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceBase
     */
    thumbnail?: string;
    /**
     * Gallery with images of the workspace
     * @type {Array<WorkspaceImage>}
     * @memberof WorkspaceBase
     */
    gallery?: Array<WorkspaceImage>;
    /**
     * Workspace keycloak user id, will be automatically be set to the logged in user
     * @type {string}
     * @memberof WorkspaceBase
     */
    userId?: string;
    /**
     * Is this a public workspace? Default false
     * @type {boolean}
     * @memberof WorkspaceBase
     */
    publicable?: boolean;
    /**
     * Is this a featured workspace? Default false
     * @type {boolean}
     * @memberof WorkspaceBase
     */
    featured?: boolean;
    /**
     * Workspace license
     * @type {string}
     * @memberof WorkspaceBase
     */
    license?: string;
    /**
     * Collaborators who work on the workspace
     * @type {Array<WorkspaceCollaborator>}
     * @memberof WorkspaceBase
     */
    collaborators?: Array<WorkspaceCollaborator>;
    /**
     * 
     * @type {VolumeStorage}
     * @memberof WorkspaceBase
     */
    storage?: VolumeStorage;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof WorkspaceBase
     */
    tags?: Array<Tag>;
}

export function WorkspaceBaseFromJSON(json: any): WorkspaceBase {
    return WorkspaceBaseFromJSONTyped(json, false);
}

export function WorkspaceBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'],
        'timestampCreated': !exists(json, 'timestamp_created') ? undefined : (new Date(json['timestamp_created'])),
        'timestampUpdated': !exists(json, 'timestamp_updated') ? undefined : (new Date(json['timestamp_updated'])),
        'lastOpenedResourceId': !exists(json, 'last_opened_resource_id') ? undefined : json['last_opened_resource_id'],
        'thumbnail': !exists(json, 'thumbnail') ? undefined : json['thumbnail'],
        'gallery': !exists(json, 'gallery') ? undefined : ((json['gallery'] as Array<any>).map(WorkspaceImageFromJSON)),
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'publicable': !exists(json, 'publicable') ? undefined : json['publicable'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'collaborators': !exists(json, 'collaborators') ? undefined : ((json['collaborators'] as Array<any>).map(WorkspaceCollaboratorFromJSON)),
        'storage': !exists(json, 'storage') ? undefined : VolumeStorageFromJSON(json['storage']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function WorkspaceBaseToJSON(value?: WorkspaceBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'timestamp_created': value.timestampCreated === undefined ? undefined : (value.timestampCreated.toISOString()),
        'timestamp_updated': value.timestampUpdated === undefined ? undefined : (value.timestampUpdated.toISOString()),
        'last_opened_resource_id': value.lastOpenedResourceId,
        'thumbnail': value.thumbnail,
        'gallery': value.gallery === undefined ? undefined : ((value.gallery as Array<any>).map(WorkspaceImageToJSON)),
        'user_id': value.userId,
        'publicable': value.publicable,
        'featured': value.featured,
        'license': value.license,
        'collaborators': value.collaborators === undefined ? undefined : ((value.collaborators as Array<any>).map(WorkspaceCollaboratorToJSON)),
        'storage': VolumeStorageToJSON(value.storage),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}


