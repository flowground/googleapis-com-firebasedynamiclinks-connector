/**
 * Auto-generated action file for "Firebase Dynamic Links" API.
 *
 * Generated at: 2019-05-07T14:41:38.526Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-firebasedynamiclinks-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'firebasedynamiclinks.shortLinks.create'
 * Endpoint Path: '/v1/shortLinks'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "$.xgafv",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "__xgafv": "$.xgafv",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "gclid": "gclid",
    "utmCampaign": "utmCampaign",
    "utmContent": "utmContent",
    "utmMedium": "utmMedium",
    "utmSource": "utmSource",
    "utmTerm": "utmTerm",
    "googlePlayAnalytics": "googlePlayAnalytics",
    "at": "at",
    "ct": "ct",
    "mt": "mt",
    "pt": "pt",
    "itunesConnectAnalytics": "itunesConnectAnalytics",
    "analyticsInfo": "analyticsInfo",
    "androidFallbackLink": "androidFallbackLink",
    "androidLink": "androidLink",
    "androidMinPackageVersionCode": "androidMinPackageVersionCode",
    "androidPackageName": "androidPackageName",
    "androidInfo": "androidInfo",
    "desktopFallbackLink": "desktopFallbackLink",
    "desktopInfo": "desktopInfo",
    "domainUriPrefix": "domainUriPrefix",
    "dynamicLinkDomain": "dynamicLinkDomain",
    "iosAppStoreId": "iosAppStoreId",
    "iosBundleId": "iosBundleId",
    "iosCustomScheme": "iosCustomScheme",
    "iosFallbackLink": "iosFallbackLink",
    "iosIpadBundleId": "iosIpadBundleId",
    "iosIpadFallbackLink": "iosIpadFallbackLink",
    "iosMinimumVersion": "iosMinimumVersion",
    "iosInfo": "iosInfo",
    "link": "link",
    "enableForcedRedirect": "enableForcedRedirect",
    "navigationInfo": "navigationInfo",
    "socialDescription": "socialDescription",
    "socialImageLink": "socialImageLink",
    "socialTitle": "socialTitle",
    "socialMetaTagInfo": "socialMetaTagInfo",
    "dynamicLinkInfo": "dynamicLinkInfo",
    "longDynamicLink": "longDynamicLink",
    "sdkVersion": "sdkVersion",
    "customSuffix": "customSuffix",
    "option": "option",
    "suffix": "suffix",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'firebasedynamiclinks.shortLinks.create',
        pathName: '/v1/shortLinks',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}