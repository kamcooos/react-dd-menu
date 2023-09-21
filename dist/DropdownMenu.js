"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));
var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TAB = 9;
var SPACEBAR = 32;
var ALIGNMENTS = ['center', 'right', 'left'];
var MENU_SIZES = ['sm', 'md', 'lg', 'xl'];
var DropdownMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(DropdownMenu, _PureComponent);
  var _super = _createSuper(DropdownMenu);
  function DropdownMenu() {
    var _this;
    _classCallCheck(this, DropdownMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      // ensure eventual event handlers registered by consumers via React props are evaluated first
      setTimeout(function () {
        return _this.props.close(e);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMenuItemKeyDown", function (e) {
      var key = e.which || e.keyCode;
      if (key === SPACEBAR) {
        _this.close(e);
        e.preventDefault();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (!_this.props.closeOnOutsideClick) {
        return;
      }
      var node = _reactDom["default"].findDOMNode(_assertThisInitialized(_this));
      var target = e.target;
      while (target.parentNode) {
        if (target === node) {
          return;
        }
        target = target.parentNode;
      }
      _this.close(e);
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var key = e.which || e.keyCode;
      if (key !== TAB) {
        return;
      }
      var items = _reactDom["default"].findDOMNode(_assertThisInitialized(_this)).querySelectorAll('button,a');
      var id = e.shiftKey ? 1 : items.length - 1;
      if (e.target === items[id]) {
        _this.close(e);
      }
    });
    return _this;
  }
  _createClass(DropdownMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen === prevProps.isOpen) {
        return;
      }
      var menuItems = _reactDom["default"].findDOMNode(this).querySelector('.dd-menu > .dd-menu-items');
      if (this.props.isOpen && !prevProps.isOpen) {
        this.lastWindowClickEvent = this.handleClickOutside;
        document.addEventListener('click', this.lastWindowClickEvent);
        if (this.props.closeOnInsideClick) {
          menuItems.addEventListener('click', this.close);
        }
        menuItems.addEventListener('onkeydown', this.handleMenuItemKeyDown);
      } else if (!this.props.isOpen && prevProps.isOpen) {
        document.removeEventListener('click', this.lastWindowClickEvent);
        if (prevProps.closeOnInsideClick) {
          menuItems.removeEventListener('click', this.close);
        }
        menuItems.removeEventListener('onkeydown', this.handleMenuItemKeyDown);
        this.lastWindowClickEvent = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.lastWindowClickEvent) {
        document.removeEventListener('click', this.lastWindowClickEvent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        menuAlign = _this$props.menuAlign,
        align = _this$props.align,
        inverse = _this$props.inverse,
        size = _this$props.size,
        className = _this$props.className;
      var menuClassName = (0, _classnames["default"])('dd-menu', "dd-menu-".concat(menuAlign || align), {
        'dd-menu-inverse': inverse
      }, className, size ? 'dd-menu-' + size : null);
      var _this$props2 = this.props,
        textAlign = _this$props2.textAlign,
        upwards = _this$props2.upwards,
        animAlign = _this$props2.animAlign,
        animate = _this$props2.animate,
        enterTimeout = _this$props2.enterTimeout,
        leaveTimeout = _this$props2.leaveTimeout;
      var listClassName = 'dd-items-' + (textAlign || align);
      var transitionProps = {
        // onKeyDown: this.handleKeyDown,
        classNames: 'grow-from-' + (upwards ? 'up-' : '') + (animAlign || align),
        enter: animate,
        exit: animate,
        timeout: {
          exit: leaveTimeout,
          enter: enterTimeout
        }
      };
      var childrenWithProps = _react["default"].Children.map(this.props.children, function (child) {
        if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
          return /*#__PURE__*/_react["default"].cloneElement(child, {
            onKeyDown: _this2.handleKeyDown
          });
        }
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: menuClassName
      }, this.props.toggle, /*#__PURE__*/_react["default"].createElement(_TransitionGroup["default"], {
        component: 'div',
        className: (0, _classnames["default"])('dd-menu-items', {
          'dd-items-upwards': upwards
        })
      }, this.props.isOpen && /*#__PURE__*/_react["default"].createElement(_CSSTransition["default"], transitionProps, /*#__PURE__*/_react["default"].createElement("ul", {
        key: "items",
        className: listClassName
      }, childrenWithProps))));
    }
  }]);
  return DropdownMenu;
}(_react.PureComponent);
exports["default"] = DropdownMenu;
_defineProperty(DropdownMenu, "propTypes", {
  isOpen: _propTypes["default"].bool.isRequired,
  close: _propTypes["default"].func.isRequired,
  toggle: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node,
  inverse: _propTypes["default"].bool,
  align: _propTypes["default"].oneOf(ALIGNMENTS),
  animAlign: _propTypes["default"].oneOf(ALIGNMENTS),
  textAlign: _propTypes["default"].oneOf(ALIGNMENTS),
  menuAlign: _propTypes["default"].oneOf(ALIGNMENTS),
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(MENU_SIZES),
  upwards: _propTypes["default"].bool,
  animate: _propTypes["default"].bool,
  enterTimeout: _propTypes["default"].number,
  leaveTimeout: _propTypes["default"].number,
  closeOnInsideClick: _propTypes["default"].bool,
  closeOnOutsideClick: _propTypes["default"].bool
});
_defineProperty(DropdownMenu, "defaultProps", {
  inverse: false,
  align: 'center',
  animAlign: null,
  textAlign: null,
  menuAlign: null,
  className: null,
  size: null,
  upwards: false,
  animate: true,
  enterTimeout: 150,
  leaveTimeout: 150,
  closeOnInsideClick: true,
  closeOnOutsideClick: true
});
_defineProperty(DropdownMenu, "MENU_SIZES", MENU_SIZES);
_defineProperty(DropdownMenu, "ALIGNMENTS", ALIGNMENTS);