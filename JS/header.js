const searchContainer = document.querySelector('.search-bar');
const inputSearch = searchContainer.querySelector('#searchInput');
const boxSuggestions = document.querySelector('.container-suggestions');
const buttonsearch=document.querySelector('#button-search')
const searchLink = document.querySelector('#busqueda');

buttonsearch.addEventListener("click",select)


inputSearch.onkeyup = e => {
	let userData = e.target.value;
	let emptyArray = [];

	if (userData) {
		emptyArray = suggestions.filter(data => {
			return data
				.toLocaleLowerCase()
				.startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map(data => {
			return (data = `<li>${data}</li>`);
		});
		searchContainer.classList.add('active');
		showSuggestions(emptyArray);

		let allList = boxSuggestions.querySelectorAll('li');

		allList.forEach(li => {
			li.setAttribute('onclick', 'select(this)');
		});
	} else {
		searchContainer.classList.remove('active');
	}
};

function select(e) {
	let selectUserData = inputSearch.value;
	let isCorrect = suggestions.includes(inputSearch)
	searchLink.href = `${inputSearch.value}.html`;
	searchLink.click()

	
}

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
	}
	boxSuggestions.innerHTML = listData;
};