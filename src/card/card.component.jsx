import React from "react";

import "./card.styles.css";

function Card({ dog }) {
	return (
		<div className="card-container">
			<img
				style={{ width: "260px", height: "210px" }}
				src={dog.imgUrl}
				alt="dogs"
			/>
			<h2> {dog.name} </h2>
			<h3> Age: {dog.age} </h3>
			<p> Breed: {dog.breed} </p>
		</div>
	);
}
export default Card;
