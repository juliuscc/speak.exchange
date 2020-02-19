webpackHotUpdate('static/development/pages/index.js', {
  /***/ './node_modules/string-hash/index.js':
    /*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      function hash(str) {
        var hash = 5381,
          i = str.length;

        while (i) {
          hash = (hash * 33) ^ str.charCodeAt(--i);
        }

        /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
         * integers. Since we want the results to be always positive, convert the
         * signed int to an unsigned by doing an unsigned bitshift. */
        return hash >>> 0;
      }

      module.exports = hash;

      /***/
    },

  /***/ './node_modules/styled-jsx/dist/lib/stylesheet.js':
    /*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';
      /* WEBPACK VAR INJECTION */ (function(process) {
        exports.__esModule = true;
        exports['default'] = void 0;

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
        var isProd =
          typeof process !== 'undefined' &&
          process.env &&
          'development' === 'production';

        var isString = function isString(o) {
          return Object.prototype.toString.call(o) === '[object String]';
        };

        var StyleSheet =
          /*#__PURE__*/
          (function() {
            function StyleSheet(_temp) {
              var _ref = _temp === void 0 ? {} : _temp,
                _ref$name = _ref.name,
                name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
                _ref$optimizeForSpeed = _ref.optimizeForSpeed,
                optimizeForSpeed =
                  _ref$optimizeForSpeed === void 0
                    ? isProd
                    : _ref$optimizeForSpeed,
                _ref$isBrowser = _ref.isBrowser,
                isBrowser =
                  _ref$isBrowser === void 0
                    ? typeof window !== 'undefined'
                    : _ref$isBrowser;

              invariant(isString(name), '`name` must be a string');
              this._name = name;
              this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';
              invariant(
                typeof optimizeForSpeed === 'boolean',
                '`optimizeForSpeed` must be a boolean'
              );
              this._optimizeForSpeed = optimizeForSpeed;
              this._isBrowser = isBrowser;
              this._serverSheet = undefined;
              this._tags = [];
              this._injected = false;
              this._rulesCount = 0;
              var node =
                this._isBrowser &&
                document.querySelector('meta[property="csp-nonce"]');
              this._nonce = node ? node.getAttribute('content') : null;
            }

            var _proto = StyleSheet.prototype;

            _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
              invariant(
                typeof bool === 'boolean',
                '`setOptimizeForSpeed` accepts a boolean'
              );
              invariant(
                this._rulesCount === 0,
                'optimizeForSpeed cannot be when rules have already been inserted'
              );
              this.flush();
              this._optimizeForSpeed = bool;
              this.inject();
            };

            _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
              return this._optimizeForSpeed;
            };

            _proto.inject = function inject() {
              var _this = this;

              invariant(!this._injected, 'sheet already injected');
              this._injected = true;

              if (this._isBrowser && this._optimizeForSpeed) {
                this._tags[0] = this.makeStyleTag(this._name);
                this._optimizeForSpeed = 'insertRule' in this.getSheet();

                if (!this._optimizeForSpeed) {
                  if (!isProd) {
                    console.warn(
                      'StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'
                    );
                  }

                  this.flush();
                  this._injected = true;
                }

                return;
              }

              this._serverSheet = {
                cssRules: [],
                insertRule: function insertRule(rule, index) {
                  if (typeof index === 'number') {
                    _this._serverSheet.cssRules[index] = {
                      cssText: rule
                    };
                  } else {
                    _this._serverSheet.cssRules.push({
                      cssText: rule
                    });
                  }

                  return index;
                },
                deleteRule: function deleteRule(index) {
                  _this._serverSheet.cssRules[index] = null;
                }
              };
            };

            _proto.getSheetForTag = function getSheetForTag(tag) {
              if (tag.sheet) {
                return tag.sheet;
              } // this weirdness brought to you by firefox

              for (var i = 0; i < document.styleSheets.length; i++) {
                if (document.styleSheets[i].ownerNode === tag) {
                  return document.styleSheets[i];
                }
              }
            };

            _proto.getSheet = function getSheet() {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            };

            _proto.insertRule = function insertRule(rule, index) {
              invariant(isString(rule), '`insertRule` accepts only strings');

              if (!this._isBrowser) {
                if (typeof index !== 'number') {
                  index = this._serverSheet.cssRules.length;
                }

                this._serverSheet.insertRule(rule, index);

                return this._rulesCount++;
              }

              if (this._optimizeForSpeed) {
                var sheet = this.getSheet();

                if (typeof index !== 'number') {
                  index = sheet.cssRules.length;
                } // this weirdness for perf, and chrome's weird bug
                // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule

                try {
                  sheet.insertRule(rule, index);
                } catch (error) {
                  if (!isProd) {
                    console.warn(
                      'StyleSheet: illegal rule: \n\n' +
                        rule +
                        '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                    );
                  }

                  return -1;
                }
              } else {
                var insertionPoint = this._tags[index];

                this._tags.push(
                  this.makeStyleTag(this._name, rule, insertionPoint)
                );
              }

              return this._rulesCount++;
            };

            _proto.replaceRule = function replaceRule(index, rule) {
              if (this._optimizeForSpeed || !this._isBrowser) {
                var sheet = this._isBrowser
                  ? this.getSheet()
                  : this._serverSheet;

                if (!rule.trim()) {
                  rule = this._deletedRulePlaceholder;
                }

                if (!sheet.cssRules[index]) {
                  // @TBD Should we throw an error?
                  return index;
                }

                sheet.deleteRule(index);

                try {
                  sheet.insertRule(rule, index);
                } catch (error) {
                  if (!isProd) {
                    console.warn(
                      'StyleSheet: illegal rule: \n\n' +
                        rule +
                        '\n\nSee https://stackoverflow.com/q/20007992 for more info'
                    );
                  } // In order to preserve the indices we insert a deleteRulePlaceholder

                  sheet.insertRule(this._deletedRulePlaceholder, index);
                }
              } else {
                var tag = this._tags[index];
                invariant(tag, 'old rule at index `' + index + '` not found');
                tag.textContent = rule;
              }

              return index;
            };

            _proto.deleteRule = function deleteRule(index) {
              if (!this._isBrowser) {
                this._serverSheet.deleteRule(index);

                return;
              }

              if (this._optimizeForSpeed) {
                this.replaceRule(index, '');
              } else {
                var tag = this._tags[index];
                invariant(tag, 'rule at index `' + index + '` not found');
                tag.parentNode.removeChild(tag);
                this._tags[index] = null;
              }
            };

            _proto.flush = function flush() {
              this._injected = false;
              this._rulesCount = 0;

              if (this._isBrowser) {
                this._tags.forEach(function(tag) {
                  return tag && tag.parentNode.removeChild(tag);
                });

                this._tags = [];
              } else {
                // simpler on server
                this._serverSheet.cssRules = [];
              }
            };

            _proto.cssRules = function cssRules() {
              var _this2 = this;

              if (!this._isBrowser) {
                return this._serverSheet.cssRules;
              }

              return this._tags.reduce(function(rules, tag) {
                if (tag) {
                  rules = rules.concat(
                    Array.prototype.map.call(
                      _this2.getSheetForTag(tag).cssRules,
                      function(rule) {
                        return rule.cssText === _this2._deletedRulePlaceholder
                          ? null
                          : rule;
                      }
                    )
                  );
                } else {
                  rules.push(null);
                }

                return rules;
              }, []);
            };

            _proto.makeStyleTag = function makeStyleTag(
              name,
              cssString,
              relativeToTag
            ) {
              if (cssString) {
                invariant(
                  isString(cssString),
                  'makeStyleTag acceps only strings as second parameter'
                );
              }

              var tag = document.createElement('style');
              if (this._nonce) tag.setAttribute('nonce', this._nonce);
              tag.type = 'text/css';
              tag.setAttribute('data-' + name, '');

              if (cssString) {
                tag.appendChild(document.createTextNode(cssString));
              }

              var head =
                document.head || document.getElementsByTagName('head')[0];

              if (relativeToTag) {
                head.insertBefore(tag, relativeToTag);
              } else {
                head.appendChild(tag);
              }

              return tag;
            };

            _createClass(StyleSheet, [
              {
                key: 'length',
                get: function get() {
                  return this._rulesCount;
                }
              }
            ]);

            return StyleSheet;
          })();

        exports['default'] = StyleSheet;

        function invariant(condition, message) {
          if (!condition) {
            throw new Error('StyleSheet: ' + message + '.');
          }
        }
        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../../process/browser.js */ './node_modules/process/browser.js'
        )
      ));

      /***/
    },

  /***/ './node_modules/styled-jsx/dist/style.js':
    /*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports.flush = flush;
      exports['default'] = void 0;

      var _react = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      );

      var _stylesheetRegistry = _interopRequireDefault(
        __webpack_require__(
          /*! ./stylesheet-registry */ './node_modules/styled-jsx/dist/stylesheet-registry.js'
        )
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      var styleSheetRegistry = new _stylesheetRegistry['default']();

      var JSXStyle =
        /*#__PURE__*/
        (function(_Component) {
          _inheritsLoose(JSXStyle, _Component);

          function JSXStyle(props) {
            var _this;

            _this = _Component.call(this, props) || this;
            _this.prevProps = {};
            return _this;
          }

          JSXStyle.dynamic = function dynamic(info) {
            return info
              .map(function(tagInfo) {
                var baseId = tagInfo[0];
                var props = tagInfo[1];
                return styleSheetRegistry.computeId(baseId, props);
              })
              .join(' ');
          }; // probably faster than PureComponent (shallowEqual)

          var _proto = JSXStyle.prototype;

          _proto.shouldComponentUpdate = function shouldComponentUpdate(
            otherProps
          ) {
            return (
              this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
              // These are the computed values for dynamic styles.
              String(this.props.dynamic) !== String(otherProps.dynamic)
            );
          };

          _proto.componentWillUnmount = function componentWillUnmount() {
            styleSheetRegistry.remove(this.props);
          };

          _proto.render = function render() {
            // This is a workaround to make the side effect async safe in the "render" phase.
            // See https://github.com/zeit/styled-jsx/pull/484
            if (this.shouldComponentUpdate(this.prevProps)) {
              // Updates
              if (this.prevProps.id) {
                styleSheetRegistry.remove(this.prevProps);
              }

              styleSheetRegistry.add(this.props);
              this.prevProps = this.props;
            }

            return null;
          };

          return JSXStyle;
        })(_react.Component);

      exports['default'] = JSXStyle;

      function flush() {
        var cssRules = styleSheetRegistry.cssRules();
        styleSheetRegistry.flush();
        return cssRules;
      }

      /***/
    },

  /***/ './node_modules/styled-jsx/dist/stylesheet-registry.js':
    /*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;
      exports['default'] = void 0;

      var _stringHash = _interopRequireDefault(
        __webpack_require__(
          /*! string-hash */ './node_modules/string-hash/index.js'
        )
      );

      var _stylesheet = _interopRequireDefault(
        __webpack_require__(
          /*! ./lib/stylesheet */ './node_modules/styled-jsx/dist/lib/stylesheet.js'
        )
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var sanitize = function sanitize(rule) {
        return rule.replace(/\/style/gi, '\\/style');
      };

      var StyleSheetRegistry =
        /*#__PURE__*/
        (function() {
          function StyleSheetRegistry(_temp) {
            var _ref = _temp === void 0 ? {} : _temp,
              _ref$styleSheet = _ref.styleSheet,
              styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
              _ref$optimizeForSpeed = _ref.optimizeForSpeed,
              optimizeForSpeed =
                _ref$optimizeForSpeed === void 0
                  ? false
                  : _ref$optimizeForSpeed,
              _ref$isBrowser = _ref.isBrowser,
              isBrowser =
                _ref$isBrowser === void 0
                  ? typeof window !== 'undefined'
                  : _ref$isBrowser;

            this._sheet =
              styleSheet ||
              new _stylesheet['default']({
                name: 'styled-jsx',
                optimizeForSpeed: optimizeForSpeed
              });

            this._sheet.inject();

            if (styleSheet && typeof optimizeForSpeed === 'boolean') {
              this._sheet.setOptimizeForSpeed(optimizeForSpeed);

              this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
            }

            this._isBrowser = isBrowser;
            this._fromServer = undefined;
            this._indices = {};
            this._instancesCounts = {};
            this.computeId = this.createComputeId();
            this.computeSelector = this.createComputeSelector();
          }

          var _proto = StyleSheetRegistry.prototype;

          _proto.add = function add(props) {
            var _this = this;

            if (undefined === this._optimizeForSpeed) {
              this._optimizeForSpeed = Array.isArray(props.children);

              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

              this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
            }

            if (this._isBrowser && !this._fromServer) {
              this._fromServer = this.selectFromServer();
              this._instancesCounts = Object.keys(this._fromServer).reduce(
                function(acc, tagName) {
                  acc[tagName] = 0;
                  return acc;
                },
                {}
              );
            }

            var _this$getIdAndRules = this.getIdAndRules(props),
              styleId = _this$getIdAndRules.styleId,
              rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.

            if (styleId in this._instancesCounts) {
              this._instancesCounts[styleId] += 1;
              return;
            }

            var indices = rules
              .map(function(rule) {
                return _this._sheet.insertRule(rule);
              }) // Filter out invalid rules
              .filter(function(index) {
                return index !== -1;
              });
            this._indices[styleId] = indices;
            this._instancesCounts[styleId] = 1;
          };

          _proto.remove = function remove(props) {
            var _this2 = this;

            var _this$getIdAndRules2 = this.getIdAndRules(props),
              styleId = _this$getIdAndRules2.styleId;

            invariant(
              styleId in this._instancesCounts,
              'styleId: `' + styleId + '` not found'
            );
            this._instancesCounts[styleId] -= 1;

            if (this._instancesCounts[styleId] < 1) {
              var tagFromServer = this._fromServer && this._fromServer[styleId];

              if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
              } else {
                this._indices[styleId].forEach(function(index) {
                  return _this2._sheet.deleteRule(index);
                });

                delete this._indices[styleId];
              }

              delete this._instancesCounts[styleId];
            }
          };

          _proto.update = function update(props, nextProps) {
            this.add(nextProps);
            this.remove(props);
          };

          _proto.flush = function flush() {
            this._sheet.flush();

            this._sheet.inject();

            this._fromServer = undefined;
            this._indices = {};
            this._instancesCounts = {};
            this.computeId = this.createComputeId();
            this.computeSelector = this.createComputeSelector();
          };

          _proto.cssRules = function cssRules() {
            var _this3 = this;

            var fromServer = this._fromServer
              ? Object.keys(this._fromServer).map(function(styleId) {
                  return [styleId, _this3._fromServer[styleId]];
                })
              : [];

            var cssRules = this._sheet.cssRules();

            return fromServer.concat(
              Object.keys(this._indices)
                .map(function(styleId) {
                  return [
                    styleId,
                    _this3._indices[styleId]
                      .map(function(index) {
                        return cssRules[index].cssText;
                      })
                      .join(_this3._optimizeForSpeed ? '' : '\n')
                  ];
                }) // filter out empty rules
                .filter(function(rule) {
                  return Boolean(rule[1]);
                })
            );
          };
          /**
           * createComputeId
           *
           * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
           */

          _proto.createComputeId = function createComputeId() {
            var cache = {};
            return function(baseId, props) {
              if (!props) {
                return 'jsx-' + baseId;
              }

              var propsToString = String(props);
              var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

              if (!cache[key]) {
                cache[key] =
                  'jsx-' +
                  (0, _stringHash['default'])(baseId + '-' + propsToString);
              }

              return cache[key];
            };
          };
          /**
           * createComputeSelector
           *
           * Creates a function to compute and memoize dynamic selectors.
           */

          _proto.createComputeSelector = function createComputeSelector(
            selectoPlaceholderRegexp
          ) {
            if (selectoPlaceholderRegexp === void 0) {
              selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
            }

            var cache = {};
            return function(id, css) {
              // Sanitize SSR-ed CSS.
              // Client side code doesn't need to be sanitized since we use
              // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
              if (!this._isBrowser) {
                css = sanitize(css);
              }

              var idcss = id + css;

              if (!cache[idcss]) {
                cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
              }

              return cache[idcss];
            };
          };

          _proto.getIdAndRules = function getIdAndRules(props) {
            var _this4 = this;

            var css = props.children,
              dynamic = props.dynamic,
              id = props.id;

            if (dynamic) {
              var styleId = this.computeId(id, dynamic);
              return {
                styleId: styleId,
                rules: Array.isArray(css)
                  ? css.map(function(rule) {
                      return _this4.computeSelector(styleId, rule);
                    })
                  : [this.computeSelector(styleId, css)]
              };
            }

            return {
              styleId: this.computeId(id),
              rules: Array.isArray(css) ? css : [css]
            };
          };
          /**
           * selectFromServer
           *
           * Collects style tags from the document with id __jsx-XXX
           */

          _proto.selectFromServer = function selectFromServer() {
            var elements = Array.prototype.slice.call(
              document.querySelectorAll('[id^="__jsx-"]')
            );
            return elements.reduce(function(acc, element) {
              var id = element.id.slice(2);
              acc[id] = element;
              return acc;
            }, {});
          };

          return StyleSheetRegistry;
        })();

      exports['default'] = StyleSheetRegistry;

      function invariant(condition, message) {
        if (!condition) {
          throw new Error('StyleSheetRegistry: ' + message + '.');
        }
      }

      /***/
    },

  /***/ './node_modules/styled-jsx/style.js':
    /*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! ./dist/style */ './node_modules/styled-jsx/dist/style.js'
      );

      /***/
    },

  /***/ './pages/index.js':
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js'
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js'
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! next/head */ './node_modules/next/dist/next-server/lib/head.js'
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_2__
      );
      var _jsxFileName =
        '/Users/jcelik/Coding/webdesign/test/next-ez/pages/index.js';

      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      var Home = function Home() {
        return __jsx(
          'div',
          {
            className: 'jsx-1276654382' + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 4
            },
            __self: this
          },
          __jsx(
            next_head__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 5
              },
              __self: this
            },
            __jsx(
              'title',
              {
                className: 'jsx-1276654382',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 6
                },
                __self: this
              },
              'Create Next App'
            ),
            __jsx('link', {
              rel: 'icon',
              href: '/favicon.ico',
              className: 'jsx-1276654382',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7
              },
              __self: this
            })
          ),
          __jsx(
            'main',
            {
              className: 'jsx-1276654382',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: this
            },
            __jsx(
              'h1',
              {
                className: 'jsx-1276654382' + ' ' + 'title',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              },
              'Welcome to ',
              __jsx(
                'a',
                {
                  href: 'https://nextjs.org',
                  className: 'jsx-1276654382',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  },
                  __self: this
                },
                'Next.js!'
              )
            ),
            __jsx(
              'p',
              {
                className: 'jsx-1276654382' + ' ' + 'description',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              'Get started by editing ',
              __jsx(
                'code',
                {
                  className: 'jsx-1276654382',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                'pages/index.js'
              )
            ),
            __jsx(
              'div',
              {
                className: 'jsx-1276654382' + ' ' + 'grid',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              __jsx(
                'a',
                {
                  href: 'https://nextjs.org/docs',
                  className: 'jsx-1276654382' + ' ' + 'card',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                __jsx(
                  'h3',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  'Documentation \u2192'
                ),
                __jsx(
                  'p',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
                  'Find in-depth information about Next.js features and API.'
                )
              ),
              __jsx(
                'a',
                {
                  href: 'https://nextjs.org/learn',
                  className: 'jsx-1276654382' + ' ' + 'card',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                },
                __jsx(
                  'h3',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  'Learn \u2192'
                ),
                __jsx(
                  'p',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  'Learn about Next.js in an interactive course with quizzes!'
                )
              ),
              __jsx(
                'a',
                {
                  href: 'https://github.com/zeit/next.js/tree/master/examples',
                  className: 'jsx-1276654382' + ' ' + 'card',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                __jsx(
                  'h3',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  'Examples \u2192'
                ),
                __jsx(
                  'p',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: this
                  },
                  'Discover and deploy boilerplate example Next.js projects.'
                )
              ),
              __jsx(
                'a',
                {
                  href:
                    'https://zeit.co/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
                  className: 'jsx-1276654382' + ' ' + 'card',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                __jsx(
                  'h3',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: this
                  },
                  'Deploy \u2192'
                ),
                __jsx(
                  'p',
                  {
                    className: 'jsx-1276654382',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  'Instantly deploy your Next.js site to a public URL with ZEIT Now.'
                )
              )
            )
          ),
          __jsx(
            'footer',
            {
              className: 'jsx-1276654382',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            __jsx(
              'a',
              {
                href:
                  'https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'jsx-1276654382',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              'Powered by ',
              __jsx('img', {
                src: '/zeit.svg',
                alt: 'ZEIT Logo',
                className: 'jsx-1276654382',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              })
            )
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '2880214721',
              __self: this
            },
            '.container.jsx-1276654382{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1276654382{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1276654382{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1276654382 img.jsx-1276654382{margin-left:0.5rem;}footer.jsx-1276654382 a.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1276654382{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1276654382 a.jsx-1276654382{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1276654382 a.jsx-1276654382:hover,.title.jsx-1276654382 a.jsx-1276654382:focus,.title.jsx-1276654382 a.jsx-1276654382:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1276654382{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1276654382,.description.jsx-1276654382{text-align:center;}.description.jsx-1276654382{line-height:1.5;font-size:1.5rem;}code.jsx-1276654382{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1276654382{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1276654382:hover,.card.jsx-1276654382:focus,.card.jsx-1276654382:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1276654382 h3.jsx-1276654382{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1276654382 p.jsx-1276654382{margin:0;font-size:1.25rem;line-height:1.5;}@media (max-width:600px){.grid.jsx-1276654382{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2VsaWsvQ29kaW5nL3dlYmRlc2lnbi90ZXN0L25leHQtZXovcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRnQixBQUcwQixBQVNGLEFBU0osQUFTUSxBQUlOLEFBTUMsQUFLQSxBQU9ZLEFBSWpCLEFBT1MsQUFJRixBQUtHLEFBU04sQUFVRCxBQWNFLEFBS0ksQUFLVCxBQU9JLFNBakVJLEFBMkRDLEVBOUZMLEFBcUdXLENBL0JULEVBbkRNLEFBS0EsQUE0REEsQ0E3RmQsQ0F1RFUsQ0FoRUEsQ0E0RG5CLEFBK0NtQixDQWhGbkIsQUEwQ29CLEtBbERXLEVBbUNkLENBMkRDLE1BaERsQixDQWhFZSxDQXNHZixBQUtBLEVBdENrQixJQWZsQixFQTJEQSxLQXhHZSxLQVVBLEFBbURJLE9BdEJuQixJQVhBLEFBS0EsTUE4QnNFLElBMUM3QyxBQStDSixJQVdKLFdBK0JmLElBOUJnQixlQXhGTSxDQXlGUixhQWhGUSxDQWlGRCxJQXZFRSx3Q0EwREEsTUEvQ0osQUE2RE0sYUExRkYsS0F1RXpCLE9Bb0JxQixFQWxGSSxpQkFtRjhCLFNBekVsQyx3Q0FXckIsQUErQ2lCLG1CQTVFSSxjQVNBLG9CQVVyQixJQTJEa0IsTUFjbEIsVUFia0IsZ0JBQ2xCLHVCQS9FQSxjQVNBIiwiZmlsZSI6Ii9Vc2Vycy9qY2VsaWsvQ29kaW5nL3dlYmRlc2lnbi90ZXN0L25leHQtZXovcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3NcIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGgzPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMz5cbiAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxoMz5MZWFybiAmcmFycjs8L2gzPlxuICAgICAgICAgIDxwPkxlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGggcXVpenplcyE8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMz5FeGFtcGxlcyAmcmFycjs8L2gzPlxuICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jby9uZXc/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgzPkRlcGxveSAmcmFycjs8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBaRUlUIE5vdy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvemVpdC5zdmdcIiBhbHQ9XCJaRUlUIExvZ29cIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGNvZGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZDpob3ZlcixcbiAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgIH1cblxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/jcelik/Coding/webdesign/test/next-ez/pages/index.js */'
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '3892888070',
              __self: this
            },
            'html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2VsaWsvQ29kaW5nL3dlYmRlc2lnbi90ZXN0L25leHQtZXovcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEx1QixBQUltQixBQU9ZLFVBTmIsU0FFNkQsR0FLeEUsa0lBSkEiLCJmaWxlIjoiL1VzZXJzL2pjZWxpay9Db2Rpbmcvd2ViZGVzaWduL3Rlc3QvbmV4dC1lei9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgPC9oMT5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZyA8Y29kZT5wYWdlcy9pbmRleC5qczwvY29kZT5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aDM+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gzPlxuICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGgzPkxlYXJuICZyYXJyOzwvaDM+XG4gICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgzPkV4YW1wbGVzICZyYXJyOzwvaDM+XG4gICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvL25ldz9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDM+RGVwbG95ICZyYXJyOzwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFpFSVQgTm93LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL3plaXQuY28/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi96ZWl0LnN2Z1wiIGFsdD1cIlpFSVQgTG9nb1wiIC8+XG4gICAgICA8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIGEge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgY29kZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgIH1cblxuICAgICAgLmdyaWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgfVxuXG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/jcelik/Coding/webdesign/test/next-ez/pages/index.js */'
          )
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Home;

      /***/
    }
});
//# sourceMappingURL=index.js.90dc2ccea69759204255.hot-update.js.map
