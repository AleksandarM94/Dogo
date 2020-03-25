import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

function CardList() {
	const dogs = [
		{
			id: 1,
			name: "Bruce",
			imgUrl:
				"https://cdn1-www.dogtime.com/assets/uploads/2019/08/afador-mixed-dog-breed-pictures-1-1442x1328.jpg",
			age: 8,
			breed: "Afador"
		},
		{
			id: 2,
			name: "Clark",
			imgUrl:
				"https://i.pinimg.com/originals/a2/34/89/a234898de7bb54fb4eac0b3f1c229746.png",

			age: 2,
			breed: "Siberian Husky"
		},
		{
			id: 3,
			name: "Diana",
			imgUrl:
				"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg",
			age: 5,
			breed: "Pomeranian"
		},
		{
			id: 4,
			name: "Will",
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/0/00/1._DSC_0346_%2810096362833%29.jpg",
			age: 30,

			breed: "German Shepherd"
		},
		{
			id: 5,
			name: "Blondie",
			imgUrl:
				"https://www.thefamilypethospital.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=5g5ejXaU",
			age: 8,

			breed: "Golden Retriver"
		},
		{
			id: 6,
			name: "Bella",
			imgUrl:
				"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225538/Poodle-On-White-03.jpg",
			age: 10,

			breed: "Poodle"
		},
		{
			id: 7,
			name: "Shorty",
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/4/4c/Chihuahua1_bvdb.jpg",
			age: 4,

			breed: "Chihuahua"
		},
		{
			id: 8,
			name: "Leo",
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/8/86/Maltese_puppy.jpeg",
			age: 5,

			breed: "Maltese"
		},
		{
			id: 9,
			name: "WillCh",
			imgUrl:
				"https://cdn3-www.dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/3-fullbody.jpg",
			age: 7,

			breed: "Chow Chow"
		},
		{
			id: 10,
			name: "Tyson",
			imgUrl:
				"https://i.pinimg.com/originals/5f/94/ee/5f94eeb896958baa207a57b608216b1a.png",
			age: 6,

			breed: "Boxer"
		},
		{
			id: 11,
			name: "Morpe",
			imgUrl:
				"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232252/Havanese-On-White-01.jpg",
			age: 9,

			breed: "Havanese"
		},
		{
			id: 12,
			name: "Papi",
			imgUrl:
				"https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Papillon-e1534277332557.jpg",
			age: 3,

			breed: "Pappillon"
		}
	];
	const dogList = dogs.map(dog => <Card key={dog.id} dog={dog} />);
	return <div className="card-list">{dogList}</div>;
}

export default CardList;
