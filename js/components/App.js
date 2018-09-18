class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            searchingText: '',
            gif: {},
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
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let number = Math.floor(Math.random() * 25);
                let data = JSON.parse(xhr.responseText).data[number];
                let gif = {
                    url: data.images.fixed_width_downsampled.webp,
                    sourceUrl: data.url
                };

                callback(gif);
            }
        };
        xhr.send();
    }

    render() {
        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
        };

        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFów!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search 
                    onSearch={this.handleSearch}
                />
                <Gif 
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    }
};
