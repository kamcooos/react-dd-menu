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
var NestedDropdownMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(NestedDropdownMenu, _PureComponent);
  var _super = _createSuper(NestedDropdownMenu);
  function NestedDropdownMenu(props) {
    var _this;
    _classCallCheck(this, NestedDropdownMenu);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handleToggleComponentClick", function (e) {
      e.stopPropagation();
      _this.setState({
        isClickOpen: !_this.state.isClickOpen
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseOver", function () {
      if (_this.closeCallback) {
        clearTimeout(_this.closeCallback);
        _this.closeCallback = null;
      }
      _this.setState({
        isHoverOpen: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.closeCallback = setTimeout(function () {
        _this.setState({
          isHoverOpen: false
        });
      }, _this.props.delay);
    });
    _this.toggleComponent = null;
    _this.closeCallback = null;
    _this.state = {
      isHoverOpen: false,
      isClickOpen: false
    };
    return _this;
  }
  _createClass(NestedDropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleComponent = _reactDom["default"].findDOMNode(this).querySelector('*');
      this.toggleComponent.addEventListener('click', this.handleToggleComponentClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.closeCallback && clearTimeout(this.closeCallback);
      this.toggleComponent.removeEventListener('click', this.handleToggleComponentClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        toggle = _this$props.toggle,
        children = _this$props.children,
        nested = _this$props.nested,
        animate = _this$props.animate,
        direction = _this$props.direction,
        upwards = _this$props.upwards,
        enterTimeout = _this$props.enterTimeout,
        leaveTimeout = _this$props.leaveTimeout;
      var isOpen = this.state.isHoverOpen || this.state.isClickOpen;
      var itemProps = {
        className: (0, _classnames["default"])('nested-dd-menu', "nested-".concat(nested))
      };
      if (this.props.openOnMouseover) {
        itemProps.onMouseOver = this.handleMouseOver;
        itemProps.onMouseLeave = this.handleMouseLeave;
      }
      var prefix = upwards ? 'up-' : '';
      var transitionProps = {
        enter: animate,
        exit: animate,
        classNames: "grow-from-".concat(prefix).concat(direction),
        timeout: {
          exit: leaveTimeout,
          enter: enterTimeout
        }
      };
      return /*#__PURE__*/_react["default"].createElement("li", itemProps, toggle, /*#__PURE__*/_react["default"].createElement(_TransitionGroup["default"], {
        component: 'span',
        className: 'dd-item-ignore'
      }, isOpen ? /*#__PURE__*/_react["default"].createElement(_CSSTransition["default"], transitionProps, /*#__PURE__*/_react["default"].createElement("ul", {
        key: "items"
      }, children)) : null));
    }
  }]);
  return NestedDropdownMenu;
}(_react.PureComponent);
exports["default"] = NestedDropdownMenu;
_defineProperty(NestedDropdownMenu, "propTypes", {
  toggle: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node,
  nested: _propTypes["default"].oneOf(['inherit', 'reverse', 'left', 'right']),
  animate: _propTypes["default"].bool,
  direction: _propTypes["default"].oneOf(['left', 'right']),
  upwards: _propTypes["default"].bool,
  delay: _propTypes["default"].number,
  enterTimeout: _propTypes["default"].number,
  leaveTimeout: _propTypes["default"].number,
  openOnMouseover: _propTypes["default"].bool
});
_defineProperty(NestedDropdownMenu, "defaultProps", {
  nested: 'reverse',
  animate: false,
  direction: 'right',
  upwards: false,
  delay: 500,
  enterTimeout: 150,
  leaveTimeout: 150,
  openOnMouseover: true
});