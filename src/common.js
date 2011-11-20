
var GitHub = function(){

	var args = Array.prototype.slice.call(arguments);

	var method = args.shift();
	if (method.substr(0,1) == '/'){
		args.unshift(method);
		method = 'GET';
	}
	var url     = args.shift();
	var data    = args.shift();
	var success = args.shift();
	var error   = args.shift();

	if (data){
		data = JSON.stringify(data);
	}


	return $.ajax({
		url: 'https://api.github.com'+url,
		type: method,
		data: data,
		processData: false,
		beforeSend: function (xhr) {
			var username = localStorage['username'];
			var password = localStorage['password'];
			xhr.setRequestHeader ("Authorization", "Basic "+btoa (username+':'+password) );
		},
		success: success,
		error: error
	});

};


function focusOrCreateTab(url) {
  chrome.windows.getAll({"populate":true}, function(windows) {
    var existing_tab = null;
    for (var i in windows) {
      var tabs = windows[i].tabs;
      for (var j in tabs) {
        var tab = tabs[j];
        if (tab.url == url) {
          existing_tab = tab;
          break;
        }
      }
    }
    if (existing_tab) {
      chrome.tabs.update(existing_tab.id, {"selected":true});
    } else {
      chrome.tabs.create({"url":url, "selected":true});
    }
  });
}



(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);


var Ghello = {};

Ghello.Issue = Backbone.Model.extend({

	/*
	 * pass it a stack numner 0..x or -1 for closed (not a stack id)
	 */
	moveIssueToStack: function(stack){
		alert('crap '+stack);
	}
});











