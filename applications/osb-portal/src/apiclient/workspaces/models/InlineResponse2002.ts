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
    FigshareRepository,
    FigshareRepositoryFromJSON,
    FigshareRepositoryFromJSONTyped,
    FigshareRepositoryToJSON,
    Pagination,
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {Pagination}
     * @memberof InlineResponse2002
     */
    pagination?: Pagination;
    /**
     * 
     * @type {Array<FigshareRepository>}
     * @memberof InlineResponse2002
     */
    figsharerepositories?: Array<FigshareRepository>;
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
    return InlineResponse2002FromJSONTyped(json, false);
}

export function InlineResponse2002FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': !exists(json, 'pagination') ? undefined : PaginationFromJSON(json['pagination']),
        'figsharerepositories': !exists(json, 'figsharerepositories') ? undefined : ((json['figsharerepositories'] as Array<any>).map(FigshareRepositoryFromJSON)),
    };
}

export function InlineResponse2002ToJSON(value?: InlineResponse2002 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': PaginationToJSON(value.pagination),
        'figsharerepositories': value.figsharerepositories === undefined ? undefined : ((value.figsharerepositories as Array<any>).map(FigshareRepositoryToJSON)),
    };
}


