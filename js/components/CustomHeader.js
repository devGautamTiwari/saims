import { navLinks } from "../constants.js";

class Header extends HTMLElement {
	constructor() {
		super();
		this.templateInnerHTML = `
    <header class="p-4 md:px-8 bg-blue-900">
        <div class="wrapper">
            <nav class="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
                <div class="text-3xl text-center sm:text-left text-white font-black leading-7">
                    <a href="./">St Andrews Institute <br />
                        <span class="text-2xl font-normal">of Medical Science</span>
                    </a>
                </div>
                <ul class="flex gap-4 text-lg text-blue-100 font-medium">
                ${navLinks
					.map(
						(link) =>
							`<li class="">
                        <a href="${link.link}">${link.name}</a>
                    </li>`
					)
					.join("")}
                    
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
