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

import ApiClient from '../ApiClient';

/**
 * The Awdadw model module.
 * @module model/Awdadw
 * @version 1.0.0
 */
class Awdadw {
    /**
     * Constructs a new <code>Awdadw</code>.
     * @alias module:model/Awdadw
     * @param tyest {String} 
     */
    constructor(tyest) { 
        
        Awdadw.initialize(this, tyest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tyest) { 
        obj['tyest'] = tyest;
    }

    /**
     * Constructs a <code>Awdadw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Awdadw} obj Optional instance to populate.
     * @return {module:model/Awdadw} The populated <code>Awdadw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Awdadw();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('tyest')) {
                obj['tyest'] = ApiClient.convertToType(data['tyest'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Awdadw.prototype['_id'] = undefined;

/**
 * @member {String} tyest
 */
Awdadw.prototype['tyest'] = undefined;






export default Awdadw;
