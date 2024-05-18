document.getElementById('go-button').addEventListener('click', function() {
    const year = document.getElementById('year-picker').value;
    const month = document.getElementById('month-picker').value;

    // Fetch or generate the content for the selected year and month
    const content = getContent(year, month);

    // Display the content
    document.getElementById('content').innerText = content;
});

function getContent(year, month) {
    // This is a sample content function
    // You can replace this with actual data fetching or generation logic
    const events = {
        "2023-05": "Amazing Event in May 2023: Example Event Details",
        "2022-12": "Amazing Event in December 2022: Example Event Details",
        // Add more events here
    };

    const key = `${year}-${month}`;
    return events[key] || `No specific event found for ${month}/${year}.`;
}
