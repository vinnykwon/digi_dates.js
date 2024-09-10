class DigiDates {
	constructor() {
		this.api = "https://digidates.de/api/v1"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getUnixTime(timestamp) {
		const response = await fetch(
			`${this.api}/unixtime?timestamp=${timestamp}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkDate(date) {
		const response = await fetch(
			`${this.api}/checkdate?date=${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getDateCalendarWeek(date) {
		const response = await fetch(
			`${this.api}/week?date=${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkLeapYear(year) {
		const response = await fetch(
			`${this.api}/leapyear?year=${year}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkAge(date) {
		const response = await fetch(
			`${this.api}/age/${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkDateCountdown(date) {
		const response = await fetch(
			`${this.api}/countdown/${date}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkDateProgress(start, end) {
		const response = await fetch(
			`${this.api}/progress?start=${start}&end=${end}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {DigiDates}
