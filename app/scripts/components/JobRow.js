

import React from 'react';
const JobRow = React.createClass({
	render: function() {
		return (
			<div className="JobRow">
				<h3>Seniour Frontend Engineer</h3>
				<h4><span>NSONE</span> New York,NY</h4>
				<h5>Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...</h5>
				<div className="JobRowTags">angularjs</div>
				<div className="JobRowTags">d3.js</div>
				<div className="JobRowTags">javascript</div>
				<div className="JobRowTags">ui</div>
				<div className="JobRowTags">css</div>
			</div>
		);
	}
});

export default JobRow;