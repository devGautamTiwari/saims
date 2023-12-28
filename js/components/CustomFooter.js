import { navLinks } from "../constants.js";

class Footer extends HTMLElement {
	constructor() {
		super();
		this.templateInnerHTML = `
    <footer class="bg-blue-900 text-white pt-16 pb-12 px-4 md:px-8">
        <div class="wrapper">
            <div class="flex flex-col gap-3">
                <div class="text-2xl text-white font-black leading-6">
                    <a href="./">St Andrews Institute <br />
                        <span class="text-xl font-normal">of Medical Science</span>
                    </a>
                </div>
                <div class="text-blue-100 font-medium">
                    <ul>
                    ${navLinks
						.map(
							(link) =>
								`<li class="">
                                    <a href="${link.link}">${link.name}</a>
                                </li>`
						)
						.join("")}
                        
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
