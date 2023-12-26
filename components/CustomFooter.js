class Footer extends HTMLElement {
	constructor() {
		super();
		this.templateInnerHTML = `
    <footer class="bg-blue-900 text-white pt-16 pb-12 px-4">
        <div class="wrapper">
            <div class="flex flex-col gap-2">
                <div class="text-xl font-extrabold"><a href="./">SAIMS</a></div>
                <div class="text-gray-300">
                    <ul>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <p class="text-sm opacity-80 mt-4">All copyright &copy; reserved ${new Date().getFullYear()}. St Andrews Institute of Medical Science.</p>
        </div>
    </footer>
`;
	}
	connectedCallback() {
		this.innerHTML = this.templateInnerHTML;
	}
}

export default Footer;
