var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
    minHeight: '310px',
    margin: '0.5em'
};

var Gif = function (_React$Component) {
    _inherits(Gif, _React$Component);

    function Gif() {
        _classCallCheck(this, Gif);

        return _possibleConstructorReturn(this, (Gif.__proto__ || Object.getPrototypeOf(Gif)).apply(this, arguments));
    }

    _createClass(Gif, [{
        key: 'getUrl',
        value: function getUrl() {
            return this.props.sourceUrl || GIPHY_LOADING_URL;
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

            return React.createElement(
                'div',
                { style: styles },
                React.createElement(
                    'a',
                    { href: this.getUrl(), title: 'view this on giphy', target: 'new' },
                    React.createElement('img', { id: 'gif', src: url, style: { width: '100%', maxWidth: '350px' } })
                )
            );
        }
    }]);

    return Gif;
}(React.Component);

;