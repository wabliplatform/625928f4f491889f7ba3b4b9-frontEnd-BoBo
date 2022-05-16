# TempApi.AwdadwApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createawdadw**](AwdadwApi.md#createawdadw) | **POST** /awdadw | Creates the data
[**deleteawdadw**](AwdadwApi.md#deleteawdadw) | **DELETE** /awdadw/{awdadwId} | Delete the element
[**getAllawdadw**](AwdadwApi.md#getAllawdadw) | **GET** /awdadw/getAll | Get all the data
[**getawdadw**](AwdadwApi.md#getawdadw) | **GET** /awdadw/{awdadwId} | Get the element
[**updateawdadw**](AwdadwApi.md#updateawdadw) | **PUT** /awdadw/{awdadwId} | Updates the element



## createawdadw

> Awdadw createawdadw(awdadw)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AwdadwApi();
let awdadw = new TempApi.Awdadw(); // Awdadw | data to be created
apiInstance.createawdadw(awdadw, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awdadw** | [**Awdadw**](Awdadw.md)| data to be created | 

### Return type

[**Awdadw**](Awdadw.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteawdadw

> deleteawdadw(awdadwId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AwdadwApi();
let awdadwId = "awdadwId_example"; // String | the Id parameter
apiInstance.deleteawdadw(awdadwId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awdadwId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllawdadw

> [Awdadw] getAllawdadw()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AwdadwApi();
apiInstance.getAllawdadw((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Awdadw]**](Awdadw.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getawdadw

> Awdadw getawdadw(awdadwId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AwdadwApi();
let awdadwId = "awdadwId_example"; // String | the Id parameter
apiInstance.getawdadw(awdadwId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awdadwId** | **String**| the Id parameter | 

### Return type

[**Awdadw**](Awdadw.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateawdadw

> Awdadw updateawdadw(awdadwId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.AwdadwApi();
let awdadwId = "awdadwId_example"; // String | the Id parameter
let opts = {
  'awdadw': new TempApi.Awdadw() // Awdadw | data to be updated
};
apiInstance.updateawdadw(awdadwId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awdadwId** | **String**| the Id parameter | 
 **awdadw** | [**Awdadw**](Awdadw.md)| data to be updated | [optional] 

### Return type

[**Awdadw**](Awdadw.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

