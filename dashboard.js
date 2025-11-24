// Load saved data
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Stats
let totalBookings = bookings.length;
let totalTravelers = bookings.reduce((sum, b) => sum + b.travelers, 0);
let lastDestination = bookings.length ? bookings[bookings.length - 1].destination : "-";

// DOM elements
const bookingForm = document.getElementById("bookingForm");
const tableBody = document.getElementById("bookingTableBody");

const totalBookingsEl = document.getElementById("totalBookings");
const totalTravelersEl = document.getElementById("totalTravelers");
const lastDestinationEl = document.getElementById("lastDestination");


// Update Dashboard Stats
function updateDashboard() {
    totalBookingsEl.textContent = totalBookings;
    totalTravelersEl.textContent = totalTravelers;
    lastDestinationEl.textContent = lastDestination;
}


// Load existing table rows
function loadTable() {
    tableBody.innerHTML = "";

    bookings.forEach(b => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${b.clientName}</td>
            <td>${b.destination}</td>
            <td>${b.date}</td>
            <td>${b.travelers}</td>
        `;
        tableBody.appendChild(row);
    });
}


// Save to localStorage
function saveBookings() {
    localStorage.setItem("bookings", JSON.stringify(bookings));
}


// Handle Form Submit
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newBooking = {
        clientName: document.getElementById("clientName").value,
        destination: document.getElementById("destination").value,
        date: document.getElementById("travelDate").value,
        travelers: Number(document.getElementById("travelers").value)
    };

    // Add to array
    bookings.push(newBooking);

    // Update stats
    totalBookings++;
    totalTravelers += newBooking.travelers;
    lastDestination = newBooking.destination;

    // Update UI
    saveBookings();
    updateDashboard();
    loadTable();

    bookingForm.reset();
});


updateDashboard();
loadTable();
