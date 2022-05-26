/* tslint:disable */
/* eslint-disable */
/**
 * accounts_api
 * Accounts rest api
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: cloudharness@metacell.us
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
    InlineResponse200FromJSON,
} from '../models';

export interface CreateUserRequest {
    requestBody: { [key: string]: object; };
}

export interface GetUserRequest {
    userid: string;
}

export interface UpdateUserRequest {
    userid: string;
    requestBody: { [key: string]: object; };
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async createUser(requestParameters: CreateUserRequest): Promise<User> {
        const response = await this.createUserRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.userid === null || requestParameters.userid === undefined) {
            throw new runtime.RequiredError('userid','Required parameter requestParameters.userid was null or undefined when calling getUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userid}`.replace(`{${"userid"}}`, encodeURIComponent(String(requestParameters.userid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async getUser(requestParameters: GetUserRequest): Promise<User> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all users
     * TODO: allow filtering
     */
    async getUsersRaw(): Promise<runtime.ApiResponse<User[]>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue).users);
    }

    /**
     * Get all users
     * TODO: allow filtering
     */
    async getUsers(): Promise<User[]> {
        const response = await this.getUsersRaw();
        return await response.value();
    }

    /**
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.userid === null || requestParameters.userid === undefined) {
            throw new runtime.RequiredError('userid','Required parameter requestParameters.userid was null or undefined when calling updateUser.');
        }

        if (requestParameters.requestBody === null || requestParameters.requestBody === undefined) {
            throw new runtime.RequiredError('requestBody','Required parameter requestParameters.requestBody was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{userid}`.replace(`{${"userid"}}`, encodeURIComponent(String(requestParameters.userid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<User> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

}
