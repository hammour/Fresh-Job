
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
//Images Imports
import logo from './../assets/images/logo.png';
import featured from './../assets/images/featured.jpg';
import featuredLogo from './../assets/images/featured-logo.jpg';
// comoponents import
import CompanyInfo from './components/companyinfo.js';
import Navigation from './components/navigation.js';
import FilterBox from './components/filterbox.js';
import JobRow from './components/jobrow.js';
import InfoBox from './components/infobox.js';



const PageAll = React.createClass({
	render: function() {
		return (
			<main>
				<div>
					<Navigation />
					<FilterBox />
					<JobRow />
					<InfoBox />
					<CompanyInfo />
				</div>
			</main>	
			
		);
	}
});

ReactDOM.render(<PageAll />, document.querySelector('main'));


// const Test = React.createClass({
// 	render: function() {
// 		return <h1 className="hello" htmlFor="">test</h1>;
// 	}
// });