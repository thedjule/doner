var React = require( 'react' );
var LoginStore = require( '../stores/LoginStore' );

/**
 * Retrieve the currently logged user from the LoginStore
 *
 * @returns {Object}
 */
function getUser() {
	return LoginStore.getUser();
}

var Header = React.createClass( {
	componentDidMount: function () {
		LoginStore.addChangeListener( this._onChange );
	},
	componentWillUnmount: function () {
		LoginStore.removeChangeListener( this._onChange );
	},
	_onChange: function () {
		this.setState( getUser() );
	},
	getInitialState: function () {
		return getUser();
	},
	render: function () {
		var user;
		if ( this.state.name ) {
			user = (
				<p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">{this.state.name}</a>
				</p>
			);
		}
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">doner</a>
					<a className="navbar-brand" href="#">
						<img alt="doner" src="assets/static/images/doner.png"/>
					</a>

					<p className="navbar-text hidden-xs">because you have no idea what you did yesterday</p>
					{user}
				</div>
			</nav>
		);
	}
} );

module.exports = Header;
