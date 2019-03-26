let m1 = 0;
let m2 = 0;
let timer = null;

let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
let scrollAvail = pageHeight - windowHeight;

document.onscroll = function () {
  m1 = document.documentElement.scrollTop || document.body.scrollTop;
  let p = (m1 / scrollAvail) * 100;
  document.getElementById("progress-left").style.width = p + '%';
  document.getElementById("progress-right").style.width = (100 - p) + '%';

  clearTimeout(timer)
  timer = setTimeout("Judge()", 1000);
  document.getElementById("navbar-main").style.transform = "translateY(0%)";
}

function Judge() {
  m2 = document.documentElement.scrollTop || document.body.scrollTop;
  if (m2 == m1 && m2 != 0) {
    document.getElementById("navbar-main").style.transform = "translateY(-105%)";
  }
}

(function () {
  var vendorPrefix = getBrowserPrefix();
  var eventName = visibilityEvent(vendorPrefix);
  document.addEventListener(eventName, visibilityEventCallback);

  var oldTitle = document.title;

  function visibilityEventCallback() {
    if (document.hidden) {
      oldTitle = document.title;
      document.title = "::>_<:: QAQ";
    } else {
      document.title = oldTitle;
    }
  }

  function getBrowserPrefix() {
    if ('hidden' in document) {
      return null;
    }

    var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];

    for (var i = 0; i < browserPrefixes.length; i++) {
      var prefix = browserPrefixes[i] + 'Hidden';
      if (prefix in document) {
        return browserPrefixes[i];
      }
    }
    return null;
  }

  function hiddenProperty(prefix) {
    if (prefix) {
      return prefix + 'Hidden';
    } else {
      return 'hidden';
    }
  }

  function visibilityState(prefix) {
    if (prefix) {
      return prefix + 'VisibilityState';
    } else {
      return 'visibilityState';
    }
  }

  function visibilityEvent(prefix) {
    if (prefix) {
      return prefix + 'visibilitychange';
    } else {
      return 'visibilitychange';
    }
  }

})();
