

import React from 'react';
import featured from './../../assets/images/featured.jpg';
import featuredLogo from './../../assets/images/featured-logo.jpg';

const CompanyInfo = React.createClass({
	render: function() {
		return (
			<div className="CompanyInfo">
				<h3>Company Information</h3>
				<div>
					<img src={featured}/>
					<h4>We Believe in Dreamers</h4>
					<img src={featuredLogo}/>
					<h2>MaxPlay</h2>
					<h3>Austin, TX</h3>
				</div>

			</div>
		);
	}
});


export default CompanyInfo;