/* Preview shim.
   Cards and kits prefer the compiled design-system bundle (window.<Namespace>).
   Before the compiler has run — e.g. a fresh file opened straight in a browser —
   this loads the component sources directly so nothing renders blank. */
(function () {
  var FILES = [
    "components/nodes/DiagramNode.jsx",
    "components/nodes/NodeStack.jsx",
    "components/nodes/Annotation.jsx",
    "components/links/Connector.jsx",
    "components/links/Bus.jsx",
    "components/links/Elbow.jsx",
    "components/board/GroupFrame.jsx",
    "components/board/DiagramBoard.jsx",
    "components/board/BoardTitle.jsx",
    "components/board/Legend.jsx"
  ];

  function fromBundle() {
    var keys = Object.keys(window);
    for (var i = 0; i < keys.length; i++) {
      try {
        var o = window[keys[i]];
        if (o && typeof o === "object" && o.DiagramBoard && o.DiagramNode && o.Bus) return o;
      } catch (e) { /* cross-origin frame or throwing getter */ }
    }
    return null;
  }

  /* Best-effort load of the compiled bundle; harmless 404 before the compiler runs. */
  function loadBundle(root) {
    return fetch(root + "_ds_bundle.js")
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (src) {
        if (!src) return null;
        new Function(src)();
        return fromBundle();
      })
      .catch(function () { return null; });
  }

  window.dsComponents = function (root) {
    root = root || "";
    var found = fromBundle();
    if (found) return Promise.resolve(found);
    return loadBundle(root).then(function (ns) {
      return ns || fromSources(root);
    });
  };

  function fromSources(root) {
    return Promise.all(
      FILES.map(function (f) {
        return fetch(root + f).then(function (r) { return r.text(); });
      })
    ).then(function (sources) {
      var names = FILES.map(function (f) { return f.split("/").pop().replace(".jsx", ""); });
      var body = sources
        .join("\n")
        .replace(/^\s*import[^\n]*\n/gm, "")
        .replace(/export\s+function/g, "function");
      var wrapped =
        "window.__dsNS = (function (React) {\n" +
        body +
        "\nreturn {" + names.join(",") + "};\n})(window.React);";
      var code = window.Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]] }).code;
      new Function(code)();
      return window.__dsNS;
    });
  }
})();
