function performSearch(event) {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value.trim();
    
    if (query) {
        logSearch(query);
        
        const duckDuckGoUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.open(duckDuckGoUrl, '_blank'); // Open the search in a new tab
    } else {
        alert("Please enter a search term."); // Alert if the input is empty
    }
}

function logSearch(query) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    
    searches.push(query);
    
    localStorage.setItem('searches', JSON.stringify(searches));
}

function displayLoggedSearches() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    console.log("Logged Searches:", searches);
}

displayLoggedSearches();

