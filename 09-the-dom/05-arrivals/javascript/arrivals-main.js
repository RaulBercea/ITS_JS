
let flight = {
    date: "",
    destination: "",
    flightName: "",
    checkin: "",
    status: ""
}

let destinations = [
    "Milano",
    "Napoli",
    "Palermo",
    "Venezia",
    "Parigi",
    "Roma",
    "Berlino"
]

let mainFunction = setInterval(() => {

    flight.date = new Date();
    flight.destination = destinations[Math.floor(Math.random() * destinations.length)];
    flight.flightName = Math.random().toString(36).slice(2);
    flight.checkin = "DS2";
    flight.status = "Departing";

    let FlightRow = document.createElement("tr");

    let flightDateTable = document.createElement("td");
    flightDateTable.innerText = flight.date;
    FlightRow.appendChild(flightDateTable);

    let flightDestinationTable = document.createElement("td");
    flightDestinationTable.innerText = flight.destination;
    FlightRow.appendChild(flightDestinationTable);

    let flightNameTable = document.createElement("td");
    flightNameTable.innerText = flight.flightName;
    FlightRow.appendChild(flightNameTable);

    document.getElementById("table").appendChild(FlightRow);
}, 1000);