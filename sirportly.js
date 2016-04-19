// Sirportly Javascript Library
// (c) 2013 aTech Media Limited.
// http://github.com/sirportly/javascript
//
// This is a simple Sirportly library which allows you to make requests
// to the Sirportly API from Javascript. Example Usage:
//
//    var sirportly = new Sirportly('yourtoken', 'yoursecret');
//    sirportly.request('users/show', {username:'adam'}, function(user) {
//      console.log("Hello there: " + user.username);
//    }
//
// Requires jQuery 1.7 or higher.
function SirportlyAPI(token, secret) {
  
  // The URL to the API endpoint
  this.api_endpoint = 'https://api.sirportly.com';
  
  // The version of the API to use
  this.api_version = 2;
  
  // Authentication token for API request
  this.api_token = token;
  
  // Authentication secret for API request
  this.api_secret = secret;
  
  // Authentication token for the API application making the request. Will be
  // sent if set.
  this.api_application = null;
  
  // Method to execute whenever an error fails to execute
  this.errorCallback = null;
  
  // Return the headers for the request
  this.headers = function() {
    var headers = {};
    if(this.api_token)        headers['X-Auth-Token'] = this.api_token;
    if(this.api_secret)       headers['X-Auth-Secret'] = this.api_secret;
    if(this.api_application)  headers['X-Auth-Application'] = this.api_application;
    return headers;
  }
  
  // Make a request to the Sirportly end point
  this.request = function(method, params, success, errorCallback) {
    var url = this.api_endpoint + "/api/v" + this.api_version + "/" + method;
    this.log("Sirportly API request to: " + url);
    var _this = this;
    jQuery.ajax({
      url: url,
      crossDomain: true,
      dataType: 'json',
      data: params,
      type: 'POST',
      success: success,
      headers: this.headers(),
      error: function(xhr, textStatus, errorThrown) {
        _this.log("!!! An error occurred making the Sirportly API request");
        if(xhr.responseText.length > 0 && xhr.responseText.charAt(0) == '{') {
          var errorDetails = JSON.parse(xhr.responseText);
          if(errorDetails.error) _this.log("!!! Server said: " + errorDetails.error);
        }
        if(errorCallback) errorCallback(xhr, textStatus, errorThrown);
        if(_this.errorCallback) _this.errorCallback(xhr, textStatus, errorThrown);
      }
    });
  }
  
  // Log a message to the console (if it exists)
  this.log = function(message) {
    if(window.console) {
      window.console.log(message);
    }
  }
  
}