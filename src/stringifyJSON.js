// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return "null";
  } else if (Array.isArray(obj) && obj.length === 0) {
    return "[]";
  } else if (Array.isArray(obj)) {
    var result = "[" + _.map(obj, function(item) {
      return stringifyJSON(item);
    }) + "]";
    return result;
  } else if (typeof obj === "object" && Object.keys(obj).length === 0) {
    return "{}";
  } else if (typeof obj === 'object') {
    var result = "{";
    var counter = 0;
    for (var key in obj) {
      if (counter) {
        result += ',';
      }
      if (!(typeof obj[key] === 'function' || obj[key] === undefined)) {
        result += (stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        counter++;
      }
    }
    result += "}";
    return result;
  } else {
    return undefined;
  }
};