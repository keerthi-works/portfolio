/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById('year');
const projectsEl = document.getElementById('projects');
const filterEls = document.querySelectorAll('#filters li');

for (let i = 0; i < filterEls.length; i++) {
	filterEls[i].addEventListener('click', function (e) {
		document.querySelector('#filters li.active').classList.remove('active');
		filterEls[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	});
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
	
	{
		name: 'SCENT STORE',
		img: 'Welcome Screen.png',
		liveUrl: "https://www.figma.com/proto/OUcJj49FGOAOn1JTJStcc5/SCENT-STORE?node-id=17-17&t=mQSPSrQh5nUEpdE4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A17&show-proto-sidebar=1",
		tags: [ 'mobile'],

		
	},

	{
		name: 'Redesign the Real Site',
		img: 'Nimesa Home Screen.png',
		liveUrl: "https://www.figma.com/proto/8f0wKXMiQJ84TUgzHlyWA7/Redesign-Landing-Page-NIMESA?page-id=0%3A1&node-id=257-695&viewport=-1526%2C-43%2C0.08&t=3Fbt96vuP8MEgfCr-1&scaling=scale-down-width&content-scaling=fixed",
		tags: [ 'website'],
		
	},


	
	{
		name: 'Sign-Up Page',
		img: 'Sign-Up-Page.png',
		liveUrl: "https://www.figma.com/proto/EuhcZHaIxfjcxctsHaPySu/Daily-UI?node-id=1-2&t=4a9fLqSrxckowpGN-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
		tags: [ 'website'],
	},
	
	{
		name: 'Landing Page-Mobile',
		img: 'landing-page.png',
		liveUrl: "https://www.figma.com/proto/EuhcZHaIxfjcxctsHaPySu/Daily-UI?node-id=61-1526&t=s8sfTyf5Ak5l5ZkE-1&scaling=scale-down&content-scaling=fixed&page-id=61%3A1525",
		tags: [ 'mobile'],
	},

	
	{
		name: 'Animated Slide',
		img: 'apple-watch.png',
		liveUrl: "https://www.figma.com/proto/OUcJj49FGOAOn1JTJStcc5/SCENT-STORE?node-id=145-29&t=NucLShgOzIkJelJ3-0&scaling=scale-down&content-scaling=fixed&page-id=30%3A105",
		tags: [ 'website'],
	},

	{
		name: 'Dashboard Page',
		img: 'Dashboard.png',
		liveUrl: "https://www.figma.com/proto/EuhcZHaIxfjcxctsHaPySu/Daily-UI?node-id=95-983&t=4a9fLqSrxckowpGN-0&scaling=scale-down&content-scaling=fixed&page-id=95%3A887&starting-point-node-id=95%3A888",
		tags: [ 'prototype'],
	},

	{
		name: 'Logo Designs',
		img: 'logo.png',
		liveUrl: "https://drive.google.com/file/d/1SXsyGStFSQgFVEG4X1QbF1BHSxexUKto/view?usp=sharing",
		tags: [ 'logo'],
	},
	
];

function renderProjects(tag) {
	let output = '';
	// <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

	for (let i = 0; i < projects.length; i++) {
		if (tag == 'all' || projects[i].tags.includes(tag)) {
			output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<a class="content flex" href="${projects[i].liveUrl}" target="_blank">
					<p>${projects[i].name}</p>
					<p class="flex">
						<img class="figma_icon" src="img/icon/figma.svg" alt="Figma Icon">
						<img class="external_icon" src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link">
					</p>
				</a>
			</div> `;
		}
	}

	projectsEl.innerHTML = output;
}

renderProjects('all');
