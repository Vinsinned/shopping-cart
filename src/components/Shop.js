import React, { useState } from "react";

const Shop = () => {
	let [amount, setAmount] = useState(0);
	let [julius, setJulius] = useState(0);
	let [yacht, setYacht] = useState(0);
	let [rollsRoyce, setRollsRoyce] = useState(0);
	let [mansion, setMansion] = useState(0);
	let [jet, setJet] = useState(0);
	let [galactic, setGalactic] = useState(0);
	let items = [
		{
			name: "Julius the Monkey",
			src: "https://apparelnews.media.clients.ellingtoncms.com/img/photos/2015/06/09/paul_frank_t600.jpg?4326734cdb8e39baa3579048ef63ad7b451e7676",
			price: "400,000,000,000",
			quantity: parseInt(julius)
		},
		{
			name: "Yacht",
			src: "https://cdn.boatinternational.com/files/2020/09/a1c0a720-f760-11ea-b953-dfd61475aeaa-VALERIE-yacht-for-sale-for-charter-vbs-03.jpg",
			price: "3,124,721",
			quantity: parseInt(yacht)
		},
		{
			name: "Rolls Royce Phantom",
			src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-rolls-royce-phantom-mmp-1-1634759496.jpg",
			price: "543,128",
			quantity: parseInt(rollsRoyce)
		},
		{
			name: "MEGA Mansion",
			src: "https://ewscripps.brightspotcdn.com/dims4/default/6e9d6e8/2147483647/strip/true/crop/5218x2935+0+270/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F3a%2Fc5%2Fe81e70f949da9e907d8038c0f2df%2F2738-carina-way-aerials-132.jpg",
			price: "100,000,000",
			quantity: parseInt(mansion)
		},
		{
			name: "Private Jet",
			src: "https://media.cntraveler.com/photos/602dea563ffc59f66d57953f/3:2/w_1074,h_716,c_limit/PrivateJetDecoder-2021-XO.jpg",
			price: "72,109,987",
			quantity: parseInt(jet)
		},
		{
			name: "Virgin Galactic Ticket",
			src: "https://media.gq-magazine.co.uk/photos/5d1399267fcc8e396881ff30/16:9/w_1280,c_limit/Virgin-Galactic-GQ-2Jun17_b.jpg",
			price: "450,098",
			quantity: parseInt(galactic)
		}
	];
	const add = (e) => {
		switch (e.target.id) {
			case 'Julius the Monkey':
				setJulius(julius += 1);
				break;
			case 'Yacht':
				setYacht(yacht += 1);
				break;
			case 'Rolls Royce Phantom':
				setRollsRoyce(rollsRoyce += 1);
				break;
			case 'MEGA Mansion':
				setMansion(mansion += 1);
				break;
			case 'Private Jet':
				setJet(jet += 1);
				break;
			case 'Virgin Galactic Ticket':
				setGalactic(galactic += 1);
				break;
			default:
				console.log('no')
		}
		setAmount(amount = julius + yacht + rollsRoyce + mansion +
			jet + galactic)
	}
	const remove = (e) => {
		switch (e.target.id) {
			case 'Julius the Monkey':
				if (julius !== 0) {
					setJulius(julius -= 1);
				}
				break;
			case 'Yacht':
				if (yacht !== 0) {
					setYacht(yacht -= 1);
				}
				break;
			case 'Rolls Royce Phantom':
				if (rollsRoyce !== 0) {
					setRollsRoyce(rollsRoyce -= 1);
				}
				break;
			case 'MEGA Mansion':
				if (mansion !== 0) {
					setMansion(mansion -= 1);
				}
				break;
			case 'Private Jet':
				if (jet !== 0) {
					setJet(jet -= 1);
				}
				break;
			case 'Virgin Galactic Ticket':
				if (galactic !== 0) {
					setMansion(galactic -= 1);
				}
				break;
			default:
				console.log('no')
		}
		setAmount(amount = julius + yacht + rollsRoyce + mansion +
			jet + galactic)
	}
	const buy = (e) => {
		let number = parseInt(document.querySelector('#quantity').value);
		if (isNaN(number) === false) {
			switch (e.target.id) {
				case 'Julius the Monkey':
					setJulius(julius += number);
					break;
				case 'Yacht':
					setYacht(yacht += number);
					break;
				case 'Rolls Royce Phantom':
					setRollsRoyce(rollsRoyce += number);
					break;
				case 'MEGA Mansion':
					setMansion(mansion += number);
					break;
				case 'Private Jet':
					setJet(jet += number);
					break;
				case 'Virgin Galactic Ticket':
					setGalactic(galactic += number);
					break;
				default:
					console.log('no')
			}
		}
		setAmount(amount = julius + yacht + rollsRoyce + mansion +
			jet + galactic)
	}
	const subtract = (e) => {
		let number = parseInt(document.querySelector('#quantity').value);
		if (isNaN(number) === false) {
			switch (e.target.id) {
				case 'Julius the Monkey':
					setJulius(julius -= number);
					if (julius < 0) {
						setJulius(julius = 0)
					}
					break;
				case 'Yacht':
					setYacht(yacht -= number);
					if (yacht < 0) {
						setYacht(yacht = 0)
					}
					break;
				case 'Rolls Royce Phantom':
					setRollsRoyce(rollsRoyce -= number);
					if (rollsRoyce < 0) {
						setRollsRoyce(rollsRoyce = 0)
					}
					break;
				case 'MEGA Mansion':
					setMansion(mansion -= number);
					if (mansion < 0) {
						setMansion(mansion = 0)
					}
					break;
				case 'Private Jet':
					setJet(jet -= number);
					if (jet < 0) {
						setJet(jet = 0)
					}
					break;
				case 'Virgin Galactic Ticket':
					setGalactic(galactic -= number);
					if (julius < 0) {
						setJulius(julius = 0)
					}
					break;
				default:
					console.log('no')
			}
		}
		setAmount(amount = julius + yacht + rollsRoyce + mansion +
			jet + galactic)
	}
  return (
		<div>
			{<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>}
			<div id="cartContainer">
				<span className="material-icons" id="cart">shopping_cart</span>
				<p id="amount">{amount}</p>
			</div>
			<div id="shop">
				{items.map(item => {
					return <div id="itemCard" key={item.name}>
						<h2>{item.name}</h2>
						<img src={item.src} alt="" />
						<p id="price">${item.price}</p>
						<input placeholder="0" type="number" id="quantity" maxLength="3" required></input>
						<div id="buy">
							<button type="button" className="buttons" id={item.name} onClick={remove}>-</button>
							<button type="button" className="miscButtons" id={item.name} onClick={subtract}>Remove</button>
							<button type="button" className="miscButtons" id={item.name} onClick={buy}>Buy</button>
							<button type="button" className="buttons" id={item.name} onClick={add}>+</button>
						</div>
						<p>{item.quantity} currently in cart</p>
					</div>
				})}
			</div>
    </div>
  );
};

export default Shop;