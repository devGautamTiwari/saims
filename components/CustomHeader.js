class Header extends HTMLElement {
	constructor() {
		super();
		this.templateInnerHTML = `
    <header class="p-4 bg-blue-900">
        <div class="wrapper">
            <nav class="flex justify-between items-center">
                <div class="text-3xl text-white font-black"><a href="/">SAIMS</a></div>
                <ul class="flex gap-4">
                <li class="text-gray-300 font-medium"><a href="/about.html">About</a></li>
                <li class="text-gray-300 font-medium"><a href="/contact.html">Contact us</a></li>
                </ul>
            </nav>
        </div>
    </header>
`;
	}
	connectedCallback() {
		this.innerHTML = this.templateInnerHTML;
	}
}

export default Header;
