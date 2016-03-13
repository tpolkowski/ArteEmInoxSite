//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftMvcAjax.js

Type.registerNamespace("Sys.Mvc");
Sys.Mvc.$create_AjaxOptions = function() { return {}; };
Sys.Mvc.InsertionMode = function() {};
Sys.Mvc.InsertionMode.prototype = { replace: 0, insertBefore: 1, insertAfter: 2 };
Sys.Mvc.InsertionMode.registerEnum("Sys.Mvc.InsertionMode", false);
Sys.Mvc.AjaxContext = function(request, updateTarget, loadingElement, insertionMode) {
    this.$3 = request;
    this.$4 = updateTarget;
    this.$1 = loadingElement;
    this.$0 = insertionMode;
};
Sys.Mvc.AjaxContext.prototype = {
    $0: 0, $1: null, $2: null, $3: null, $4: null,
    get_data: function() {
        if (this.$2) {
            return this.$2.get_responseData();
        } else {
            return null;
        }
    },
    get_insertionMode: function() { return this.$0; },
    get_loadingElement: function() { return this.$1; },
    get_object: function() {
        var $0 = this.get_response();
        return ($0) ? $0.get_object() : null;
    },
    get_response: function() { return this.$2; },
    set_response: function(value) {
        this.$2 = value;
        return value;
    },
    get_request: function() { return this.$3; },
    get_updateTarget: function() { return this.$4; }
};
Sys.Mvc.AsyncHyperlink = function() {};
Sys.Mvc.AsyncHyperlink.handleClick = function(anchor, evt, ajaxOptions) {
    evt.preventDefault();
    Sys.Mvc.MvcHelpers.$2(anchor.href, "post", "", anchor, ajaxOptions);
};
Sys.Mvc.MvcHelpers = function() {};
Sys.Mvc.MvcHelpers.$0 = function($p0, $p1, $p2) {
    if ($p0.disabled) {
        return null;
    }
    var $0 = $p0.name;
    if ($0) {
        var $1 = $p0.tagName.toUpperCase();
        var $2 = encodeURIComponent($0);
        var $3 = $p0;
        if ($1 === "INPUT") {
            var $4 = $3.type;
            if ($4 === "submit") {
                return $2 + "=" + encodeURIComponent($3.value);
            } else if ($4 === "image") {
                return $2 + ".x=" + $p1 + "&" + $2 + ".y=" + $p2;
            }
        } else if (($1 === "BUTTON") && ($0.length) && ($3.type === "submit")) {
            return $2 + "=" + encodeURIComponent($3.value);
        }
    }
    return null;
};
Sys.Mvc.MvcHelpers.$1 = function($p0) {
    var $0 = $p0.elements;
    var $1 = new Sys.StringBuilder();
    var $2 = $0.length;
    for (var $4 = 0; $4 < $2; $4++) {
        var $5 = $0[$4];
        var $6 = $5.name;
        if (!$6 || !$6.length) {
            continue;
        }
        var $7 = $5.tagName.toUpperCase();
        if ($7 === "INPUT") {
            var $8 = $5;
            var $9 = $8.type;
            if (($9 === "text") || ($9 === "password") || ($9 === "hidden") || ((($9 === "checkbox") || ($9 === "radio")) && $5.checked)) {
                $1.append(encodeURIComponent($6));
                $1.append("=");
                $1.append(encodeURIComponent($8.value));
                $1.append("&");
            }
        } else if ($7 === "SELECT") {
            var $A = $5;
            var $B = $A.options.length;
            for (var $C = 0; $C < $B; $C++) {
                var $D = $A.options[$C];
                if ($D.selected) {
                    $1.append(encodeURIComponent($6));
                    $1.append("=");
                    $1.append(encodeURIComponent($D.value));
                    $1.append("&");
                }
            }
        } else if ($7 === "TEXTAREA") {
            $1.append(encodeURIComponent($6));
            $1.append("=");
            $1.append(encodeURIComponent(($5.value)));
            $1.append("&");
        }
    }
    var $3 = $p0._additionalInput;
    if ($3) {
        $1.append($3);
        $1.append("&");
    }
    return $1.toString();
};
Sys.Mvc.MvcHelpers.$2 = function($p0, $p1, $p2, $p3, $p4) {
    if ($p4.confirm) {
        if (!confirm($p4.confirm)) {
            return;
        }
    }
    if ($p4.url) {
        $p0 = $p4.url;
    }
    if ($p4.httpMethod) {
        $p1 = $p4.httpMethod;
    }
    if ($p2.length > 0 && !$p2.endsWith("&")) {
        $p2 += "&";
    }
    $p2 += "X-Requested-With=XMLHttpRequest";
    var $0 = $p1.toUpperCase();
    var $1 = ($0 === "GET" || $0 === "POST");
    if (!$1) {
        $p2 += "&";
        $p2 += "X-HTTP-Method-Override=" + $0;
    }
    var $2 = "";
    if ($0 === "GET" || $0 === "DELETE") {
        if ($p0.indexOf("?") > -1) {
            if (!$p0.endsWith("&")) {
                $p0 += "&";
            }
            $p0 += $p2;
        } else {
            $p0 += "?";
            $p0 += $p2;
        }
    } else {
        $2 = $p2;
    }
    var $3 = new Sys.Net.WebRequest();
    $3.set_url($p0);
    if ($1) {
        $3.set_httpVerb($p1);
    } else {
        $3.set_httpVerb("POST");
        $3.get_headers()["X-HTTP-Method-Override"] = $0;
    }
    $3.set_body($2);
    if ($p1.toUpperCase() === "PUT") {
        $3.get_headers()["Content-Type"] = "application/x-www-form-urlencoded;";
    }
    $3.get_headers()["X-Requested-With"] = "XMLHttpRequest";
    var $4 = null;
    if ($p4.updateTargetId) {
        $4 = $get($p4.updateTargetId);
    }
    var $5 = null;
    if ($p4.loadingElementId) {
        $5 = $get($p4.loadingElementId);
    }
    var $6 = new Sys.Mvc.AjaxContext($3, $4, $5, $p4.insertionMode);
    var $7 = true;
    if ($p4.onBegin) {
        $7 = $p4.onBegin($6) !== false;
    }
    if ($5) {
        Sys.UI.DomElement.setVisible($6.get_loadingElement(), true);
    }
    if ($7) {
        $3.add_completed(Function.createDelegate(null, function($p1_0) {
            Sys.Mvc.MvcHelpers.$3($3, $p4, $6);
        }));
        $3.invoke();
    }
};
Sys.Mvc.MvcHelpers.$3 = function($p0, $p1, $p2) {
    $p2.set_response($p0.get_executor());
    if ($p1.onComplete && $p1.onComplete($p2) === false) {
        return;
    }
    var $0 = $p2.get_response().get_statusCode();
    if (($0 >= 200 && $0 < 300) || $0 === 304 || $0 === 1223) {
        if ($0 !== 204 && $0 !== 304 && $0 !== 1223) {
            var $1 = $p2.get_response().getResponseHeader("Content-Type");
            if (($1) && ($1.indexOf("application/x-javascript") !== -1)) {
                eval($p2.get_data());
            } else {
                Sys.Mvc.MvcHelpers.updateDomElement($p2.get_updateTarget(), $p2.get_insertionMode(), $p2.get_data());
            }
        }
        if ($p1.onSuccess) {
            $p1.onSuccess($p2);
        }
    } else {
        if ($p1.onFailure) {
            $p1.onFailure($p2);
        }
    }
    if ($p2.get_loadingElement()) {
        Sys.UI.DomElement.setVisible($p2.get_loadingElement(), false);
    }
};
Sys.Mvc.MvcHelpers.updateDomElement = function(target, insertionMode, content) {
    if (target) {
        switch (insertionMode) {
        case 0:
            target.innerHTML = content;
            break;
        case 1:
            if (content && content.length > 0) {
                target.innerHTML = content + target.innerHTML.trimStart();
            }
            break;
        case 2:
            if (content && content.length > 0) {
                target.innerHTML = target.innerHTML.trimEnd() + content;
            }
            break;
        }
    }
};
Sys.Mvc.AsyncForm = function() {};
Sys.Mvc.AsyncForm.handleClick = function(form, evt) {
    var $0 = Sys.Mvc.MvcHelpers.$0(evt.target, evt.offsetX, evt.offsetY);
    form._additionalInput = $0;
};
Sys.Mvc.AsyncForm.handleSubmit = function(form, evt, ajaxOptions) {
    evt.preventDefault();
    var $0 = form.validationCallbacks;
    if ($0) {
        for (var $2 = 0; $2 < $0.length; $2++) {
            var $3 = $0[$2];
            if (!$3()) {
                return;
            }
        }
    }
    var $1 = Sys.Mvc.MvcHelpers.$1(form);
    Sys.Mvc.MvcHelpers.$2(form.action, form.method || "post", $1, form, ajaxOptions);
};
Sys.Mvc.AjaxContext.registerClass("Sys.Mvc.AjaxContext");
Sys.Mvc.AsyncHyperlink.registerClass("Sys.Mvc.AsyncHyperlink");
Sys.Mvc.MvcHelpers.registerClass("Sys.Mvc.MvcHelpers");
Sys.Mvc.AsyncForm.registerClass("Sys.Mvc.AsyncForm");
// ---- Do not remove this footer ----
// Generated using Script# v0.5.0.0 (http://projects.nikhilk.net)
// -----------------------------------