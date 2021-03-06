class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchingText: ''
        };
    }

    handleChange = (event) => {
        const searchingText = event.target.value;

        this.setState((state) => {
            return {searchingText: searchingText};
        });

        if (searchingText.length > 2) {
            this.props.onSearch(searchingText);
        }
    }
    
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.props.onSearch(this.state.searchingText);
        }
    }

    render() {
        const styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWidth: '350px',
        };

        return (
            <input 
                type='text' 
                onChange={this.handleChange} 
                onKeyUp={this.handleKeyUp}
                placeholder='Tutaj wpisz wyszukiwaną frazę' 
                style={styles} 
                value={this.state.searchTerm}>
            </input>
        );
    }
};
