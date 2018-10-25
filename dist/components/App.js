var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleSearch = function (searchingText) {
            _this.setState(function (state) {
                return { loading: true };
            });
            _this.getGif(searchingText, function (gif) {
                this.setState(function (state) {
                    return {
                        loading: false,
                        gif: gif,
                        searchingText: searchingText
                    };
                });
            }.bind(_this));
        };

        _this.state = {
            loading: false,
            searchingText: '',
            gif: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'getGif',
        value: function getGif(searchingText, callback) {
            var url = 'http://api.giphy.com/v1/gifs/search?q=' + searchingText + '&api_key=dc6zaTOxFJmzC';

            // Promises using axios
            // axios.get(url)
            //     .then(function (response) {
            //         let gif = [];
            //         let data = response.data.data;
            //         console.log(data);

            //         gif = data.map(item => gif = {
            //             url: item.images.fixed_width_downsampled.webp,
            //             sourceUrl: item.url
            //         });

            //         callback(gif);
            //     });

            // Promises using native promises
            this.httpGet(url).then(function (response) {
                var gif = [];
                var data = void 0;

                response = JSON.parse(response);
                data = response.data;

                gif = data.map(function (item) {
                    return gif = {
                        url: item.images.fixed_width_downsampled.webp,
                        sourceUrl: item.url
                    };
                });

                callback(gif);
            }).catch(function (error) {
                console.error(error);
            });
        }

        // function to promises

    }, {
        key: 'httpGet',
        value: function httpGet(url) {
            return new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();

                request.onload = function () {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function () {
                    reject(new Error('XMLHttpRequest Error: ' + this.statusText));
                };
                request.open('GET', url);
                request.send();
            });
        }
    }, {
        key: 'renderGifs',
        value: function renderGifs() {
            var _this2 = this;

            return this.state.gif.map(function (item, index) {
                return React.createElement(Gif, {
                    loading: _this2.state.loading,
                    url: item.url,
                    key: index,
                    sourceUrl: item.sourceUrl
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                margin: '0 auto',
                textAlign: 'center',
                width: '90%'
            };
            var gifs = this.renderGifs();

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
                React.createElement(
                    'div',
                    null,
                    gifs
                )
            );
        }
    }]);

    return App;
}(React.Component);

;