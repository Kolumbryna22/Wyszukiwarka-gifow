var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            loading: false,
            searchingText: '',
            gif: {}
        };
        return _this;
    }

    _createClass(App, [{
        key: 'handleSearch',
        value: function handleSearch(searchingText) {
            this.setState(function (state) {
                return { loading: true };
            });
            this.getGif(searchingText, function (gif) {
                this.setState(function (state) {
                    return {
                        loading: false,
                        gif: gif,
                        searchingText: searchingText
                    };
                });
            }.bind(this));
        }
    }, {
        key: 'getGif',
        value: function getGif(searchingText, callback) {
            var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchingText + '&api_key=dc6zaTOxFJmzC';
            var xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText).data;
                    console.log(data);
                    var gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };

                    callback(gif);
                }
            };
            xhr.send();
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                margin: '0 auto',
                textAlign: 'center',
                width: '90%'
            };

            return React.createElement(
                'div',
                { style: styles },
                React.createElement(
                    'h1',
                    null,
                    'Wyszukiwarka GIF\xF3w!'
                ),
                React.createElement(
                    'p',
                    null,
                    'Znajd\u017A gifa na ',
                    React.createElement(
                        'a',
                        { href: 'http://giphy.com' },
                        'giphy'
                    ),
                    '. Naciskaj enter, aby pobra\u0107 kolejne gify.'
                ),
                React.createElement(Search, {
                    onSearch: this.handleSearch
                }),
                React.createElement(Gif, {
                    loading: this.state.loading,
                    url: this.state.gif.url,
                    sourceUrl: this.state.gif.sourceUrl
                })
            );
        }
    }]);

    return App;
}(React.Component);

;