import React from "react";

import "./search-box.styles.css";

const SearchBox = props => (
	<input
		className="search-box"
		type="search"
		placeholder="Search dogs"
		onChange={props.onSearchChange}
	/>
);
export default SearchBox;
