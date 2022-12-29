function maximumContainers(scenarios) {

	scenarios.forEach((scenario) => {
		let [presupuesto, costo, contenedoresVaciosParaDevolver] = scenario.split(/\s+/).map((val) => Number(val));
		if (!Number.isInteger(presupuesto) || !Number.isInteger(costo) || !Number.isInteger(contenedoresVaciosParaDevolver)) return;
		if (presupuesto < 2 || presupuesto > 10 ** 5 || costo > 10 ** 5 || contenedoresVaciosParaDevolver > 10 ** 5) return;
		let containers = Math.floor(presupuesto / costo);
		presupuesto -= costo * containers;
		let containersVacios = containers;
		while (containersVacios >= contenedoresVaciosParaDevolver) {
			containersVacios -= contenedoresVaciosParaDevolver;
			containers++;
			containersVacios++;
		}
		if (containersVacios >= contenedoresVaciosParaDevolver) {
			containers++;
		}
		console.log(containers);
	});
}

const scenarios = ["6 2 2"];
maximumContainers(scenarios); // Expected output: 412
// console.log(isNaN(null)); // Expected output: true