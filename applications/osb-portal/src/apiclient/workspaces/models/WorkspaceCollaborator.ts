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
<<<<<<< HEAD:applications/osb-portal/src/apiclient/workspaces/models/OSBRepositoryResourceAllOf.ts
 * OSB Repository Resource
 * @export
 * @interface OSBRepositoryResourceAllOf
 */
export interface OSBRepositoryResourceAllOf {
    /**
     * 
     * @type {number}
     * @memberof OSBRepositoryResourceAllOf
     */
    id?: number;
}

export function OSBRepositoryResourceAllOfFromJSON(json: any): OSBRepositoryResourceAllOf {
    return OSBRepositoryResourceAllOfFromJSONTyped(json, false);
}

export function OSBRepositoryResourceAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSBRepositoryResourceAllOf {
=======
 * Workspace Collaborator of a workspace
 * @export
 * @interface WorkspaceCollaborator
 */
export interface WorkspaceCollaborator {
    /**
     * 
     * @type {number}
     * @memberof WorkspaceCollaborator
     */
    id?: number;
    /**
     * Workspace Collaborator keycloak user id
     * @type {string}
     * @memberof WorkspaceCollaborator
     */
    userId: string;
}

export function WorkspaceCollaboratorFromJSON(json: any): WorkspaceCollaborator {
    return WorkspaceCollaboratorFromJSONTyped(json, false);
}

export function WorkspaceCollaboratorFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceCollaborator {
>>>>>>> ec7ce22e331dbbb674d9fe3b6261a723fd6705ca:applications/osb-portal/src/apiclient/workspaces/models/WorkspaceCollaborator.ts
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
<<<<<<< HEAD:applications/osb-portal/src/apiclient/workspaces/models/OSBRepositoryResourceAllOf.ts
    };
}

export function OSBRepositoryResourceAllOfToJSON(value?: OSBRepositoryResourceAllOf | null): any {
=======
        'userId': json['user_id'],
    };
}

export function WorkspaceCollaboratorToJSON(value?: WorkspaceCollaborator | null): any {
>>>>>>> ec7ce22e331dbbb674d9fe3b6261a723fd6705ca:applications/osb-portal/src/apiclient/workspaces/models/WorkspaceCollaborator.ts
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
<<<<<<< HEAD:applications/osb-portal/src/apiclient/workspaces/models/OSBRepositoryResourceAllOf.ts
=======
        'user_id': value.userId,
>>>>>>> ec7ce22e331dbbb674d9fe3b6261a723fd6705ca:applications/osb-portal/src/apiclient/workspaces/models/WorkspaceCollaborator.ts
    };
}


