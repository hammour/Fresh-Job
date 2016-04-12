

import React from 'react';


const InfoBox = React.createClass({
	render: function() {
		return (
			<div className="InfoBox">
				<h1>Looking for a job?</h1>
				<h3>Create a Fresh Jobs profile and <span>let employers come to you.</span></h3>
				<ul>
					<li>Employees Search Our Database and contact you</li>
					<li>Import Easily for LinkdIn</li>
					<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
				</ul>
				<div>
					<h3 className="CreateProfileButton1">Create a Profile</h3>
				</div>
			</div>
		);
	}
});

export default InfoBox;