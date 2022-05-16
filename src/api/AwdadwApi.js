/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Awdadw from '../model/Awdadw';

/**
* Awdadw service.
* @module api/AwdadwApi
* @version 1.0.0
*/
export default class AwdadwApi {

    /**
    * Constructs a new AwdadwApi. 
    * @alias module:api/AwdadwApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createawdadw operation.
     * @callback module:api/AwdadwApi~createawdadwCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Awdadw} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Awdadw} awdadw data to be created
     * @param {module:api/AwdadwApi~createawdadwCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Awdadw}
     */
    createawdadw(awdadw, callback) {
      let postBody = awdadw;
      // verify the required parameter 'awdadw' is set
      if (awdadw === undefined || awdadw === null) {
        throw new Error("Missing the required parameter 'awdadw' when calling createawdadw");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Awdadw;
      return this.apiClient.callApi(
        '/awdadw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteawdadw operation.
     * @callback module:api/AwdadwApi~deleteawdadwCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} awdadwId the Id parameter
     * @param {module:api/AwdadwApi~deleteawdadwCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteawdadw(awdadwId, callback) {
      let postBody = null;
      // verify the required parameter 'awdadwId' is set
      if (awdadwId === undefined || awdadwId === null) {
        throw new Error("Missing the required parameter 'awdadwId' when calling deleteawdadw");
      }

      let pathParams = {
        'awdadwId': awdadwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/awdadw/{awdadwId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllawdadw operation.
     * @callback module:api/AwdadwApi~getAllawdadwCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Awdadw>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/AwdadwApi~getAllawdadwCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Awdadw>}
     */
    getAllawdadw(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Awdadw];
      return this.apiClient.callApi(
        '/awdadw/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getawdadw operation.
     * @callback module:api/AwdadwApi~getawdadwCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Awdadw} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} awdadwId the Id parameter
     * @param {module:api/AwdadwApi~getawdadwCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Awdadw}
     */
    getawdadw(awdadwId, callback) {
      let postBody = null;
      // verify the required parameter 'awdadwId' is set
      if (awdadwId === undefined || awdadwId === null) {
        throw new Error("Missing the required parameter 'awdadwId' when calling getawdadw");
      }

      let pathParams = {
        'awdadwId': awdadwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Awdadw;
      return this.apiClient.callApi(
        '/awdadw/{awdadwId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateawdadw operation.
     * @callback module:api/AwdadwApi~updateawdadwCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Awdadw} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} awdadwId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Awdadw} opts.awdadw data to be updated
     * @param {module:api/AwdadwApi~updateawdadwCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Awdadw}
     */
    updateawdadw(awdadwId, opts, callback) {
      opts = opts || {};
      let postBody = opts['awdadw'];
      // verify the required parameter 'awdadwId' is set
      if (awdadwId === undefined || awdadwId === null) {
        throw new Error("Missing the required parameter 'awdadwId' when calling updateawdadw");
      }

      let pathParams = {
        'awdadwId': awdadwId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Awdadw;
      return this.apiClient.callApi(
        '/awdadw/{awdadwId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
