window.addEventListener('DOMContentLoaded', () => {
	const deadline = '2025-11-01'

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / (1000 * 60)) % 60),
			seconds = Math.floor((t / 1000) % 60)

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		}
	}

	function setClock(endtime) {
		const timerItems = document.querySelectorAll('.timer__item')

		if (timerItems.length === 0) {
			console.error('Timer items not found!')
			return
		}

		const timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const t = getTimeRemaining(endtime)
			const timeValues = [t.days, t.hours, t.minutes, t.seconds]

			timerItems.forEach((item, index) => {
				item.firstChild.textContent = timeValues[index]
					.toString()
					.padStart(2, '0')
			})

			if (t.total <= 0) {
				clearInterval(timeInterval)
				timerItems.forEach(item => {
					item.firstChild.textContent = '00'
				})
			}
		}

		updateClock()
	}

	setClock(deadline)
})
