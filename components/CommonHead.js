class CommonHead extends HTMLElement {
	constructor() {
		super();
		this.template = document.createElement("template");
		this.template.innerHTML = `
        <meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
			integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw=="
			crossorigin="anonymous"
			referrerpolicy="no-referrer"
		/>
		<link rel="stylesheet" href="css/index.css" />
        `;
	}
	connectedCallback() {
		document.head.append(this.template.content.cloneNode(true));
		this.remove();
	}
}

export default CommonHead;
