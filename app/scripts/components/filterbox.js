



import React from 'react';
const FilterBox = React.createClass({
	render: function() {
		return (
			<div className="SearchBox">
				<div>
					<label for="text1">Keyword</label>
					<input type="text" name="text1" id="text1" />
				</div>
				<div>
					<label for="text1">Location</label>
					<input type="text" name="text1" id="text1" />
				</div>
				<div>
					<h3 className="SearchButton1">Search</h3>
				</div>
			</div>
		);
	}
});


export default FilterBox;