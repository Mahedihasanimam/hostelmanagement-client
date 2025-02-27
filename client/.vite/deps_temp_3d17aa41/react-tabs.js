import {
  require_react
} from "./chunk-PMYDY72F.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode2(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode2(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode2);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode2(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode2(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-tabs/esm/components/Tabs.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react3 = __toESM(require_react());

// node_modules/react-tabs/esm/helpers/childrenDeepMap.js
var import_react = __toESM(require_react());

// node_modules/react-tabs/esm/helpers/elementTypes.js
function makeTypeChecker(tabsRole) {
  return (element) => !!element.type && element.type.tabsRole === tabsRole;
}
var isTab = makeTypeChecker("Tab");
var isTabList = makeTypeChecker("TabList");
var isTabPanel = makeTypeChecker("TabPanel");

// node_modules/react-tabs/esm/helpers/childrenDeepMap.js
function isTabChild(child) {
  return isTab(child) || isTabList(child) || isTabPanel(child);
}
function deepMap(children, callback) {
  return import_react.Children.map(children, (child) => {
    if (child === null)
      return null;
    if (isTabChild(child)) {
      return callback(child);
    }
    if (child.props && child.props.children && typeof child.props.children === "object") {
      return (0, import_react.cloneElement)(child, { ...child.props, children: deepMap(child.props.children, callback) });
    }
    return child;
  });
}
function deepForEach(children, callback) {
  return import_react.Children.forEach(children, (child) => {
    if (child === null)
      return;
    if (isTab(child) || isTabPanel(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === "object") {
      if (isTabList(child))
        callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

// node_modules/react-tabs/esm/helpers/propTypes.js
function childrenPropType(props, propName, componentName) {
  let error;
  let tabsCount = 0;
  let panelsCount = 0;
  let tabListFound = false;
  const listTabs = [];
  const children = props[propName];
  deepForEach(children, (child) => {
    if (isTabList(child)) {
      if (child.props && child.props.children && typeof child.props.children === "object") {
        deepForEach(child.props.children, (listChild) => listTabs.push(listChild));
      }
      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }
      tabListFound = true;
    }
    if (isTab(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.");
      }
      tabsCount++;
    } else if (isTabPanel(child)) {
      panelsCount++;
    }
  });
  if (!error && tabsCount !== panelsCount) {
    error = new Error(`There should be an equal number of 'Tab' and 'TabPanel' in \`${componentName}\`. Received ${tabsCount} 'Tab' and ${panelsCount} 'TabPanel'.`);
  }
  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  const prop = props[propName];
  const name = propFullName || propName;
  let error = null;
  if (prop && typeof prop !== "function") {
    error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected \`function\`.`);
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error(`The ${location} \`${name}\` is marked as required in \`${componentName}\`, but its value is \`undefined\` or \`null\`.
\`onSelect\` is required when \`selectedIndex\` is also set. Not doing so will make the tabs not do anything, as \`selectedIndex\` indicates that you want to handle the selected tab yourself.
If you only want to set the inital tab replace \`selectedIndex\` with \`defaultIndex\`.`);
  }
  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  const prop = props[propName];
  const name = propFullName || propName;
  let error = null;
  if (prop != null && typeof prop !== "number") {
    error = new Error(`Invalid ${location} \`${name}\` of type \`${typeof prop}\` supplied to \`${componentName}\`, expected \`number\`.`);
  } else if (props.defaultIndex != null && prop != null) {
    return new Error(`The ${location} \`${name}\` cannot be used together with \`defaultIndex\` in \`${componentName}\`.
Either remove \`${name}\` to let \`${componentName}\` handle the selected tab internally or remove \`defaultIndex\` to handle it yourself.`);
  }
  return error;
}

// node_modules/react-tabs/esm/components/UncontrolledTabs.js
var import_prop_types = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/react-tabs/esm/helpers/count.js
function getTabsCount(children) {
  let tabCount = 0;
  deepForEach(children, (child) => {
    if (isTab(child))
      tabCount++;
  });
  return tabCount;
}

// node_modules/react-tabs/esm/components/UncontrolledTabs.js
function isNode(node) {
  return node && "getAttribute" in node;
}
function isTabNode(node) {
  return isNode(node) && node.getAttribute("data-rttab");
}
function isTabDisabled(node) {
  return isNode(node) && node.getAttribute("aria-disabled") === "true";
}
var canUseActiveElement;
function determineCanUseActiveElement(environment) {
  const env = environment || (typeof window !== "undefined" ? window : void 0);
  try {
    canUseActiveElement = !!(typeof env !== "undefined" && env.document && env.document.activeElement);
  } catch (e) {
    canUseActiveElement = false;
  }
}
var defaultProps = { className: "react-tabs", focus: false };
var propTypes = true ? { children: childrenPropType, direction: import_prop_types.default.oneOf(["rtl", "ltr"]), className: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.array, import_prop_types.default.object]), disabledTabClassName: import_prop_types.default.string, disableUpDownKeys: import_prop_types.default.bool, disableLeftRightKeys: import_prop_types.default.bool, domRef: import_prop_types.default.func, focus: import_prop_types.default.bool, forceRenderTabPanel: import_prop_types.default.bool, onSelect: import_prop_types.default.func.isRequired, selectedIndex: import_prop_types.default.number.isRequired, selectedTabClassName: import_prop_types.default.string, selectedTabPanelClassName: import_prop_types.default.string, environment: import_prop_types.default.object } : {};
var UncontrolledTabs = (props) => {
  let tabNodes = (0, import_react2.useRef)([]);
  let tabIds = (0, import_react2.useRef)([]);
  const ref = (0, import_react2.useRef)();
  function setSelected(index, event) {
    if (index < 0 || index >= getTabsCount2())
      return;
    const { onSelect: onSelect2, selectedIndex: selectedIndex2 } = props;
    onSelect2(index, selectedIndex2, event);
  }
  function getNextTab(index) {
    const count = getTabsCount2();
    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    for (let i = 0; i < index; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getPrevTab(index) {
    let i = index;
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    i = getTabsCount2();
    while (i-- > index) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return index;
  }
  function getFirstTab() {
    const count = getTabsCount2();
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getLastTab() {
    let i = getTabsCount2();
    while (i--) {
      if (!isTabDisabled(getTab(i))) {
        return i;
      }
    }
    return null;
  }
  function getTabsCount2() {
    const { children: children2 } = props;
    return getTabsCount(children2);
  }
  function getTab(index) {
    return tabNodes.current[`tabs-${index}`];
  }
  function getChildren() {
    let index = 0;
    const { children: children2, disabledTabClassName: disabledTabClassName2, focus: focus2, forceRenderTabPanel: forceRenderTabPanel2, selectedIndex: selectedIndex2, selectedTabClassName: selectedTabClassName2, selectedTabPanelClassName: selectedTabPanelClassName2, environment: environment2 } = props;
    tabIds.current = tabIds.current || [];
    let diff = tabIds.current.length - getTabsCount2();
    const id = (0, import_react2.useId)();
    while (diff++ < 0) {
      tabIds.current.push(`${id}${tabIds.current.length}`);
    }
    return deepMap(children2, (child) => {
      let result = child;
      if (isTabList(child)) {
        let listIndex = 0;
        let wasTabFocused = false;
        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment2);
        }
        const env = environment2 || (typeof window !== "undefined" ? window : void 0);
        if (canUseActiveElement && env) {
          wasTabFocused = import_react2.default.Children.toArray(child.props.children).filter(isTab).some((tab, i) => env.document.activeElement === getTab(i));
        }
        result = (0, import_react2.cloneElement)(child, { children: deepMap(child.props.children, (tab) => {
          const key = `tabs-${listIndex}`;
          const selected = selectedIndex2 === listIndex;
          const props2 = { tabRef: (node) => {
            tabNodes.current[key] = node;
          }, id: tabIds.current[listIndex], selected, focus: selected && (focus2 || wasTabFocused) };
          if (selectedTabClassName2)
            props2.selectedClassName = selectedTabClassName2;
          if (disabledTabClassName2)
            props2.disabledClassName = disabledTabClassName2;
          listIndex++;
          return (0, import_react2.cloneElement)(tab, props2);
        }) });
      } else if (isTabPanel(child)) {
        const props2 = { id: tabIds.current[index], selected: selectedIndex2 === index };
        if (forceRenderTabPanel2)
          props2.forceRender = forceRenderTabPanel2;
        if (selectedTabPanelClassName2)
          props2.selectedClassName = selectedTabPanelClassName2;
        index++;
        result = (0, import_react2.cloneElement)(child, props2);
      }
      return result;
    });
  }
  function handleKeyDown(e) {
    const { direction, disableUpDownKeys: disableUpDownKeys2, disableLeftRightKeys: disableLeftRightKeys2 } = props;
    if (isTabFromContainer(e.target)) {
      let { selectedIndex: index } = props;
      let preventDefault = false;
      let useSelectedIndex = false;
      if (e.code === "Space" || e.keyCode === 32 || e.code === "Enter" || e.keyCode === 13) {
        preventDefault = true;
        useSelectedIndex = false;
        handleClick(e);
      }
      if (!disableLeftRightKeys2 && (e.keyCode === 37 || e.code === "ArrowLeft") || !disableUpDownKeys2 && (e.keyCode === 38 || e.code === "ArrowUp")) {
        if (direction === "rtl") {
          index = getNextTab(index);
        } else {
          index = getPrevTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (!disableLeftRightKeys2 && (e.keyCode === 39 || e.code === "ArrowRight") || !disableUpDownKeys2 && (e.keyCode === 40 || e.code === "ArrowDown")) {
        if (direction === "rtl") {
          index = getPrevTab(index);
        } else {
          index = getNextTab(index);
        }
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 35 || e.code === "End") {
        index = getLastTab();
        preventDefault = true;
        useSelectedIndex = true;
      } else if (e.keyCode === 36 || e.code === "Home") {
        index = getFirstTab();
        preventDefault = true;
        useSelectedIndex = true;
      }
      if (preventDefault) {
        e.preventDefault();
      }
      if (useSelectedIndex) {
        setSelected(index, e);
      }
    }
  }
  function handleClick(e) {
    let node = e.target;
    do {
      if (isTabFromContainer(node)) {
        if (isTabDisabled(node)) {
          return;
        }
        const index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);
        setSelected(index, e);
        return;
      }
    } while ((node = node.parentNode) != null);
  }
  function isTabFromContainer(node) {
    if (!isTabNode(node)) {
      return false;
    }
    let nodeAncestor = node.parentElement;
    do {
      if (nodeAncestor === ref.current)
        return true;
      if (nodeAncestor.getAttribute("data-rttabs"))
        break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);
    return false;
  }
  const { children, className, disabledTabClassName, domRef, focus, forceRenderTabPanel, onSelect, selectedIndex, selectedTabClassName, selectedTabPanelClassName, environment, disableUpDownKeys, disableLeftRightKeys, ...attributes } = { ...defaultProps, ...props };
  return import_react2.default.createElement("div", Object.assign({}, attributes, { className: clsx_default(className), onClick: handleClick, onKeyDown: handleKeyDown, ref: (node) => {
    ref.current = node;
    if (domRef)
      domRef(node);
  }, "data-rttabs": true }), getChildren());
};
UncontrolledTabs.propTypes = true ? propTypes : {};
var UncontrolledTabs_default = UncontrolledTabs;

// node_modules/react-tabs/esm/components/Tabs.js
var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;
var propTypes2 = true ? { children: childrenPropType, className: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.array, import_prop_types2.default.object]), defaultFocus: import_prop_types2.default.bool, defaultIndex: import_prop_types2.default.number, direction: import_prop_types2.default.oneOf(["rtl", "ltr"]), disabledTabClassName: import_prop_types2.default.string, disableUpDownKeys: import_prop_types2.default.bool, disableLeftRightKeys: import_prop_types2.default.bool, domRef: import_prop_types2.default.func, environment: import_prop_types2.default.object, focusTabOnClick: import_prop_types2.default.bool, forceRenderTabPanel: import_prop_types2.default.bool, onSelect: onSelectPropType, selectedIndex: selectedIndexPropType, selectedTabClassName: import_prop_types2.default.string, selectedTabPanelClassName: import_prop_types2.default.string } : {};
var defaultProps2 = { defaultFocus: false, focusTabOnClick: true, forceRenderTabPanel: false, selectedIndex: null, defaultIndex: null, environment: null, disableUpDownKeys: false, disableLeftRightKeys: false };
var getModeFromProps = (props) => {
  return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
};
var checkForIllegalModeChange = (props, mode) => {
  if (mode != void 0 && mode !== getModeFromProps(props)) {
    throw new Error(`Switching between controlled mode (by using \`selectedIndex\`) and uncontrolled mode is not supported in \`Tabs\`.
For more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.`);
  }
};
var Tabs = (props) => {
  const { children, defaultFocus, defaultIndex, focusTabOnClick, onSelect, ...attributes } = { ...defaultProps2, ...props };
  const [focus, setFocus] = (0, import_react3.useState)(defaultFocus);
  const [mode] = (0, import_react3.useState)(getModeFromProps(attributes));
  const [selectedIndex, setSelectedIndex] = (0, import_react3.useState)(mode === MODE_UNCONTROLLED ? defaultIndex || 0 : null);
  (0, import_react3.useEffect)(() => {
    setFocus(false);
  }, []);
  if (mode === MODE_UNCONTROLLED) {
    const tabsCount = getTabsCount(children);
    (0, import_react3.useEffect)(() => {
      if (selectedIndex != null) {
        const maxTabIndex = Math.max(0, tabsCount - 1);
        setSelectedIndex(Math.min(selectedIndex, maxTabIndex));
      }
    }, [tabsCount]);
  }
  checkForIllegalModeChange(attributes, mode);
  const handleSelected = (index, last, event) => {
    if (typeof onSelect === "function") {
      if (onSelect(index, last, event) === false)
        return;
    }
    if (focusTabOnClick) {
      setFocus(true);
    }
    if (mode === MODE_UNCONTROLLED) {
      setSelectedIndex(index);
    }
  };
  let subProps = { ...props, ...attributes };
  subProps.focus = focus;
  subProps.onSelect = handleSelected;
  if (selectedIndex != null) {
    subProps.selectedIndex = selectedIndex;
  }
  delete subProps.defaultFocus;
  delete subProps.defaultIndex;
  delete subProps.focusTabOnClick;
  return import_react3.default.createElement(UncontrolledTabs_default, subProps, children);
};
Tabs.propTypes = true ? propTypes2 : {};
Tabs.tabsRole = "Tabs";
var Tabs_default = Tabs;

// node_modules/react-tabs/esm/components/TabList.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react4 = __toESM(require_react());
var defaultProps3 = { className: "react-tabs__tab-list" };
var propTypes3 = true ? { children: import_prop_types3.default.oneOfType([import_prop_types3.default.object, import_prop_types3.default.array]), className: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.array, import_prop_types3.default.object]) } : {};
var TabList = (props) => {
  const { children, className, ...attributes } = { ...defaultProps3, ...props };
  return import_react4.default.createElement("ul", Object.assign({}, attributes, { className: clsx_default(className), role: "tablist" }), children);
};
TabList.tabsRole = "TabList";
TabList.propTypes = true ? propTypes3 : {};
var TabList_default = TabList;

// node_modules/react-tabs/esm/components/Tab.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());
var DEFAULT_CLASS = "react-tabs__tab";
var defaultProps4 = { className: DEFAULT_CLASS, disabledClassName: `${DEFAULT_CLASS}--disabled`, focus: false, id: null, selected: false, selectedClassName: `${DEFAULT_CLASS}--selected` };
var propTypes4 = true ? { children: import_prop_types4.default.oneOfType([import_prop_types4.default.array, import_prop_types4.default.object, import_prop_types4.default.string]), className: import_prop_types4.default.oneOfType([import_prop_types4.default.string, import_prop_types4.default.array, import_prop_types4.default.object]), disabled: import_prop_types4.default.bool, disabledClassName: import_prop_types4.default.string, focus: import_prop_types4.default.bool, id: import_prop_types4.default.string, selected: import_prop_types4.default.bool, selectedClassName: import_prop_types4.default.string, tabIndex: import_prop_types4.default.string, tabRef: import_prop_types4.default.func } : {};
var Tab = (props) => {
  let nodeRef = (0, import_react5.useRef)();
  const { children, className, disabled, disabledClassName, focus, id, selected, selectedClassName, tabIndex, tabRef, ...attributes } = { ...defaultProps4, ...props };
  (0, import_react5.useEffect)(() => {
    if (selected && focus) {
      nodeRef.current.focus();
    }
  }, [selected, focus]);
  return import_react5.default.createElement("li", Object.assign({}, attributes, { className: clsx_default(className, { [selectedClassName]: selected, [disabledClassName]: disabled }), ref: (node) => {
    nodeRef.current = node;
    if (tabRef)
      tabRef(node);
  }, role: "tab", id: `tab${id}`, "aria-selected": selected ? "true" : "false", "aria-disabled": disabled ? "true" : "false", "aria-controls": `panel${id}`, tabIndex: tabIndex || (selected ? "0" : null), "data-rttab": true }), children);
};
Tab.propTypes = true ? propTypes4 : {};
Tab.tabsRole = "Tab";
var Tab_default = Tab;

// node_modules/react-tabs/esm/components/TabPanel.js
var import_prop_types5 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
var DEFAULT_CLASS2 = "react-tabs__tab-panel";
var defaultProps5 = { className: DEFAULT_CLASS2, forceRender: false, selectedClassName: `${DEFAULT_CLASS2}--selected` };
var propTypes5 = true ? { children: import_prop_types5.default.node, className: import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.array, import_prop_types5.default.object]), forceRender: import_prop_types5.default.bool, id: import_prop_types5.default.string, selected: import_prop_types5.default.bool, selectedClassName: import_prop_types5.default.string } : {};
var TabPanel = (props) => {
  const { children, className, forceRender, id, selected, selectedClassName, ...attributes } = { ...defaultProps5, ...props };
  return import_react6.default.createElement("div", Object.assign({}, attributes, { className: clsx_default(className, { [selectedClassName]: selected }), role: "tabpanel", id: `panel${id}`, "aria-labelledby": `tab${id}` }), forceRender || selected ? children : null);
};
TabPanel.tabsRole = "TabPanel";
TabPanel.propTypes = true ? propTypes5 : {};
var TabPanel_default = TabPanel;
export {
  Tab_default as Tab,
  TabList_default as TabList,
  TabPanel_default as TabPanel,
  Tabs_default as Tabs
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-tabs.js.map
