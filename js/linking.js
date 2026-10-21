// Match each subject card to its course page.
const subjectLinks = {
	"Chemistry (CH 110)": "COURSES/CH110/chem.html",
	"Physics (PH 110)": "COURSES/PH110/physics.html",
	"Communication Skills (LA 111)": "COURSES/LA111/la111.html",
	"Engineering Drawing (ED 111-211)": "COURSES/ED11-211/ed111.html",
	"Computer Science (CS 110)": "COURSES/CS110/computer.html",
	"Biology (Bio)": "COURSES/BIO110/biology.html",
	"Math (MA 110)": "COURSES/MA110/math.html"
};

document.querySelectorAll(".card").forEach(card => {
	const subject = card.querySelector("h2")?.textContent.trim();
	const button = card.querySelector(".card-button");
	const destination = subjectLinks[subject];

	if (button && destination) {
		// Keep normal link navigation as a fallback and handle button clicks explicitly.
		button.href = destination;
		button.onclick = event => {
			event.preventDefault();
			window.location.href = destination;
		};
	}
});
