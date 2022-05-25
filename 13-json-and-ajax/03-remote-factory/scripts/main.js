/**
 * Function that turns all keys in an object into an array
 * @param {Object} obj the object with keys
 * @returns an array containing the keys of the object
 */
const getAllKeys = (obj) => {
	const keys = [];

	for (const key in obj) {
		const curr = obj[key];

		if (curr && typeof curr === "object" && !Array.isArray(curr)) {
			keys.push(...getAllKeys(curr));
		} else {
			keys.push(key);
		}
	}

	return keys;
};

const populateForm = (arr) => {
	const idSelect = document.getElementById("car-ids");
	const propertySelect = document.getElementById("car-properties");

	for (const obj of arr) {
		const idOption = document.createElement("option");
		idOption.value = obj.id;
		idOption.textContent = obj.id;
		idSelect.appendChild(idOption);
	}

	const keys = getAllKeys(arr[0]);

	for (const key of keys) {
		const propertyOption = document.createElement("option");
		if (key === "id") {
			continue;
		}

		propertyOption.value = key;
		propertyOption.textContent = key;
		propertySelect.appendChild(propertyOption);
	}
};

/**
 * Function used to validate a form
 * @param {*} property 
 * @param {*} text 
 * @returns 
 */
const isFormValid = (property, text) => {
	if (text === "") {
		return false;
	}

	switch (property) {
		case "brand":
			if (!isNaN(text)) {
				return false;
			}
			break;
		case "color":
			if (!isNaN(text)) {
				return false;
			}
			break;
		case "cylinders":
			if (!/\d/.test(text)) {
				return false;
			}
			break;
		case "horsepower":
			if (!/\d/.test(text)) {
				return false;
			}
			break;
		case "weight":
			if (!/\d/.test(text)) {
				return false;
			}
			break;
		case "dimensions":
			if (!/\d/.test(text)) {
				return false;
			}

			if (!(text.split(" ").length === 3)) {
				return false;
			}
			break;
		case "hasCruiseControl":
			if (text !== "false" && text !== "true") {
				return false;
			}
			break;
		case "origin":
			if (!isNaN(text)) {
				return false;
			}
			break;
	}

	return true;
};

const addButtonFunctionality = (json, url, where) => {
	const button = document.getElementById("submit-change");

	button.addEventListener("click", (event) => {
		event.preventDefault();

		const id = document.getElementById("car-ids").value;
		const property = document.getElementById("car-properties").value;
		const inputText = document.getElementById("car-property-text").value;

		if (!isFormValid(property, inputText)) {
			console.log("Form is not valid");
			return;
		}

		json.forEach((obj) => {
			if (obj.id === parseInt(id)) {
				if (property === "horsepower" || property === "cylinders" || property === "weight") {
					obj.technicalDetails[property] = inputText;
				} else if (property === "dimensions") {
					obj[property] = inputText.split(" ");
				} else if (property === "hasCruiseControl") {
					obj[property] = inputText === "true" ? true : false;
				} else {
					obj[property] = inputText;
				}
			}
		});

		const reqConfig = {
			method: "PUT",
			url,
			header: {
				name: "Content-Type",
				value: "application/json",
			},
			payload: JSON.stringify(json),
		};

		JSONblobRequest(reqConfig, (json) => {
			printArrayOfObjects(json, where);
		});
	});
};

const printArrayOfObjects = (arr, where) => {
	const children = [];

	for (const obj of arr) {
		const ul = document.createElement("ul");
		ul.addEventListener("click", () => {
			ul.classList.toggle("expanded");
		});
		printObject(obj, ul);

		children.push(ul);
	}

	where.replaceChildren(...children);
};

const printObject = (obj, where) => {
	for (const key in obj) {
		const curr = obj[key];
		const li = document.createElement("li");
		const span = document.createElement("span");
		const spanText = document.createTextNode(`${key}: `);
		span.appendChild(spanText);
		li.appendChild(span);

		if (curr !== null && typeof curr === "object" && !Array.isArray(curr)) {
			where.appendChild(li);
			printObject(curr, where);
		} else {
			let text;

			if (Array.isArray(curr)) {
				text = curr.join(", ");
			} else if (curr === null) {
				text = "N/A";
			} else {
				text = curr;
			}

			const listText = document.createTextNode(text);
			li.appendChild(listText);
			where.appendChild(li);
		}
	}
};

const JSONblobRequest = (reqConfig, callback) => {
	const { method, url, header, payload } = reqConfig;

	const req = new XMLHttpRequest();

	req.open(method, url);

	if (header) {
		req.setRequestHeader(header.name, header.value);
	}

	req.onload = () => {
		if (req.status === 200) {
			const json = JSON.parse(req.responseText);
			callback(json);
		} else {
			console.log(`Error ${req.status}`);
		}
	};

	req.send(payload);
};

const carsContainer = document.getElementById("cars-container");
const factoryList = document.getElementById("factory");

const METHOD = "GET";
const CARS_URL = "https://jsonblob.com/api/jsonBlob/979116756283179008/";
const FACTORY_URL = "https://jsonblob.com/api/jsonBlob/977218496572440576";

JSONblobRequest({ method: METHOD, url: CARS_URL }, (res) => {
	printArrayOfObjects(res, carsContainer);
	populateForm(res);
	addButtonFunctionality(res, CARS_URL, carsContainer);
});
JSONblobRequest({ method: METHOD, url: FACTORY_URL }, (res) => {
	printObject(res, factoryList);
});
