document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".hero input");

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            let query = searchInput.value.trim();
            if (query) {
                alert(`Searching for "${query}"...`);
                // You could redirect or fetch data from API here
            } else {
                alert("Please type something to search.");
            }
        }
    });
});
