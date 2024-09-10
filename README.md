# digi_dates.js
Web-API for [digidates.de](https://digidates.de/en/) an REST API for time and date calculations

## Example
```JavaScript
async function main() {
	const { DigiDates } = require("./digi_dates.js")
	const digiDates = new DigiDates()
	const unixTime = await digiDates.getUnixTime("timestamp")
	console.log(unixTime)
}

main()
```
