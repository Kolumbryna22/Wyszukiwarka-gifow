class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            searchingText: '',
            gif: [],
        };
    }

    handleSearch = (searchingText) => {
        this.setState((state) => {
            return {loading: true};
        });
        this.getGif(searchingText, function(gif) {
            this.setState((state) => {
                return {
                    loading: false,
                    gif: gif,
                    searchingText: searchingText
                };
            });
        }.bind(this));
    }

    getGif(searchingText, callback) {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + searchingText + '&api_key=dc6zaTOxFJmzC';

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
        this.httpGet(url)
            .then(function (response) {
                let gif = [];
                let data;

                response = JSON.parse(response);
                data = response.data;
                
                gif = data.map(item => gif = {
                    url: item.images.fixed_width_downsampled.webp,
                    sourceUrl: item.url
                });

                callback(gif);
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    // function to promises
    httpGet(url) {
        return new Promise (
            function(resolve, reject) {
                const request = new XMLHttpRequest();

                request.onload = function() {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function() {
                    reject(new Error (
                        `XMLHttpRequest Error: ${this.statusText}`));
                };
                request.open('GET', url);
                request.send();
            });
    }

    renderGifs() {
        return this.state.gif.map((item, index) => <Gif 
                loading={this.state.loading}
                url={item.url}
                key= {index}
                sourceUrl={item.sourceUrl}
            />);
    }

    render() {
        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
        };
        const gifs = this.renderGifs();

        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFów!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search 
                    onSearch={this.handleSearch}
                />
                <div>{gifs}</div>
            </div>
        );
    }
};
