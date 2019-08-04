import axios from "axios";

export default (function() {
  function qa(urls) {
    var _iqaob = new _iqa();
    var _urls = urls || [];
    for (var i = 0, len = _urls.length; i < len; i++) {
      qa.getPathname(urls[i])
    }
    return _iqaob;
  }
  qa.getPathname = function(url) {
    var _arr = url.split("/");
    var _name = _arr[_arr.length - 1];
    var _newName = _name.split('.')[0]
    console.log(_newName)
  };
  function _iqa() {}
  return qa;
})();
