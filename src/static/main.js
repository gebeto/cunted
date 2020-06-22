const createCounter = () => {
	let count = 0;
	let counterElement = document.getElementById("counter");

	const refreshCounter = () => {
		counterElement.textContent = count;
	}

	const withRefresh = (modifier) => {
		return (...args) => {
			modifier(...args);
			refreshCounter();
		}
	}

	return {
		increment: withRefresh(() => {
			count += 1;
		}),

		decrement: withRefresh(() => {
			count -= 1;
		}),

		reset: withRefresh(() => {
			count = 0;
		}),
	};
}

const counter = createCounter();
document.body.addEventListener("click", counter.increment);
document.getElementById("reset").addEventListener("click", counter.reset);