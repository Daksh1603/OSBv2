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
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {Pagination}
     * @memberof InlineResponse2003
     */
    pagination?: Pagination;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof InlineResponse2003
     */
    tags?: Array<Tag>;
}

export function InlineResponse2003FromJSON(json: any): InlineResponse2003 {
    return InlineResponse2003FromJSONTyped(json, false);
}

export function InlineResponse2003FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2003 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : PaginationFromJSON(json['pagination']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagFromJSON)),
    };
}

export function InlineResponse2003ToJSON(value?: InlineResponse2003 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': PaginationToJSON(value.pagination),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagToJSON)),
    };
}


