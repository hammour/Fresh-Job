



import React from 'react';

import logo from './../../assets/images/logo.png';



const Navigation = React.createClass({
	render: function() {
		return (
			<nav>
				<div className="leftside">
				<img src={logo}/><h2>Fresh Jobs</h2>
				</div>
				<div className="rightside">
					<span className="pagelinks"><a href="#">JOBS</a></span>
					<span className="pagelinks"><a href="#">COMPANIES</a></span>
					<span className="pagelinks"><a href="#">CITIES</a></span>
					<span className="pagelinks"><a href="#">WHY FRESH?</a></span>
					<span className="pagelinks"><a href="#">FOR EMPLOYERS</a></span>
				</div>
			</nav>
		);
	}
});


export default Navigation;