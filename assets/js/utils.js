function getById(id) {
    return document.getElementById(id);
}

function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentImage(currentName) {
    if (currentName === ``) {
        let image = document.createElement('img');
        image.src = '';
    }
}

function oneOrMoreFiltered(filtered, headingText, searchInput) {
    if (filtered.length === 0) {
        return headingText.innerHTML = `Няма резултати, които да отговарят на търсенето.`
    } else if (filtered.length === 1) {
        return headingText.innerHTML = `${searchInput}: намеренo e ${filtered.length} място за настаняване.`
    } else {
        return headingText.innerHTML = `${searchInput}: намерени са ${filtered.length} места за настаняване.`;
    }
}

function displayHomes() {
    const pages = decodeURI(location.hash).substring(1).split('/');
    
    if (pages.length === 2) {
        printHotelsByDestination(pages[1], HOTELS_BY_DESTINATION_CONTAINER);
        ALL_HOTELS_BY_DESTINATION.style.display = 'block';
        HOTEL_PAGE_CONTAINER.style.display = 'none';
    }

    if (pages.length === 3) {
        printHotelPage(pages[2]);
        ALL_HOTELS_BY_DESTINATION.style.display = 'none';
        HOTEL_PAGE_CONTAINER.style.display = 'block';
    }
}

function changeFavouritesIcon(x) {
    if (x.classList.contains("fas fa-heart")) {
        x.classList.remove("fas fa-heart");
        x.classList.add("far fa-heart");
    } else {
        x.classList.remove("far fa-heart");
        x.classList.add("fas fa-heart");
    }
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function emptyInput() {
    let inputValue = SEARCH_BOX.value;
    
    if (inputValue === "") {
        alert("Enter some destination");
        return false;
    };
}