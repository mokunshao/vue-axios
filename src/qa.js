import axios from "axios";

export default (function() {
  function qa(urls) {
    var _iqaob = new _iqa();
    var _urls = urls || [];
    for (var i = 0, len = _urls.length; i < len; i++) {
      (function(j) {
        var _name = qa.getPathname(_urls[j]);
        var obj = { data: { name: _name } };
        _iqaob[_name] = function() {
          _iqaob.sendMes.call(_iqaob, _urls[j], obj);
        };
      })(i);
    }
    console.log(_iqaob);
    return _iqaob;
  }
  qa.getPathname = function(url) {
    var _arr = url.split("/");
    var _name = _arr[_arr.length - 1];
    var _newName = _name.split(".")[0];
    return _newName;
  };
  function _iqa() {
    this._vueob = {};
  }
  _iqa.prototype.sendMes = function(url, ob) {
    console.log(url,ob)
    var self = this;
    var _url = url || "";
    var _ob = ob || {};
    var _type = _ob.type || "get";
    var _data = _ob.data || {};
    var status = {
      get: function() {
        axios.get(_url).then(function(res) {
          var name = _data["name"];
          self._vueob[name] = res.data;
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
