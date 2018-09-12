var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return {
                searchingText: ''
            };
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var searchingText = event.target.value;

            this.setState({
                searchingText: searchingText
            });

            if (searchingText.length > 2) {
                this.props.onSearch(searchingText);
            }
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(event) {
            if (event.keyCode === 13) {
                this.props.onSearch(this.state.searchingText);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                fontSize: '1.5em',
                width: '90%',
                maxWidth: '350px'
            };

            return React.createElement('input', {
                type: 'text',
                onChange: this.handleChange,
                onKeyUp: this.handleKeyUp,
                placeholder: 'Tutaj wpisz wyszukiwan\u0105 fraz\u0119',
                style: styles,
                value: this.state.searchTerm });
        }
    }]);

    return Search;
}(React.Component);

;