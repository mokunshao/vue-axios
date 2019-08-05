import axios from "axios";

export default (function() {
  function qa(urls) {
    var _iqaob = new _iqa();
    var _urls = urls || [];
    for (var i = 0, len = _urls.length; i < len; i++) {
      (function(j) {
        var _name = qa.getPathname(_urls[j]);
        _iqaob[_name] = function(obj) {
          obj = obj || {};
          obj.name = _name;
          _iqaob.sendMes.call(_iqaob, _urls[j], obj);
        };
      })(i);
    }
    return _iqaob;
  }
  qa.getPathname = function(url) {
    var _arr = url.split("/");
    var _name = _arr[_arr.length - 1];
    var _newName = _name.split(".")[0];
    return _newName;
  };
  qa.qs = function(obj) {
    var _str = "";
    if (JSON.stringify(obj) !== "{}") {
      _str += "?";
      var _index = 0;
      for (var key in obj) {
        if (_index !== 0) {
          _str += "&";
        }
        _str += key;
        _str += "=";
        _str += obj[key];
        _index++;
      }
    }
    return _str;
  };
  function _iqa() {
    this._vueob = {};
  }
  _iqa.prototype.sendMes = function(url, obj) {
    var self = this;
    var _url = url || "";
    var _obj = obj || {};
    var _type = _obj.type || "get";
    var _data = _obj.data || {};
    var _name = _obj.name || "";
    var _success = _obj.success || function() {};
    var _block = _obj.block || true;
    var status = {
      get: function() {
        var _query = qa.qs(_data);
        axios.get(_url + _query).then(function(res) {
          self.status = 0;
          var _result = _success.call(self._vueob, res);
          if (_result) {
            self._vueob[_name] = _result;
          } else {
            self._vueob[_name] = res.data;
          }
        });
      },
      post: function() {},
      put: function() {},
      delete: function() {}
    };
    status[_type]();
  };
  _iqa.prototype.v = function(vueob) {
    this._vueob = vueob;
    return this;
  };
  return qa;
})();
