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
    OSBRepository,
    OSBRepositoryFromJSON,
    OSBRepositoryFromJSONTyped,
    OSBRepositoryToJSON,
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from '.';

/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {Pagination}
     * @memberof InlineResponse2001
     */
    pagination?: Pagination;
    /**
     * 
     * @type {Array<OSBRepository>}
     * @memberof InlineResponse2001
     */
    osbrepositories?: Array<OSBRepository>;
}

export function InlineResponse2001FromJSON(json: any): InlineResponse2001 {
    return InlineResponse2001FromJSONTyped(json, false);
}

export function InlineResponse2001FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2001 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : PaginationFromJSON(json['pagination']),
        'osbrepositories': !exists(json, 'osbrepositories') ? undefined : ((json['osbrepositories'] as Array<any>).map(OSBRepositoryFromJSON)),
    };
}

export function InlineResponse2001ToJSON(value?: InlineResponse2001 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': PaginationToJSON(value.pagination),
        'osbrepositories': value.osbrepositories === undefined ? undefined : ((value.osbrepositories as Array<any>).map(OSBRepositoryToJSON)),
    };
}


