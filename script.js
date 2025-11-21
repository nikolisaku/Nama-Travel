let totalBookings = 0;
let totalTravelers = 0;


const bookingForm = document.getElementById("bookingForm");
const tableBody = document.getElementById("bookingTableBody");

const totalBookingsEl = document.getElementById("totalBookings");
const totalTravelersEl = document.getElementById("totalTravelers");
const lastDestinationEl = document.getElementById("lastDestination");


bookingForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const clientName = document.getElementById("clientName").value;
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travelDate").value;
    const travelers = Number(document.getElementById("travelers").value);


    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${clientName}</td>
        <td>${destination}</td>
        <td>${travelDate}</td>
        <td>${travelers}</td>
    `;

    tableBody.appendChild(newRow);


    totalBookings = totalBookings + 1;
    totalTravelers = totalTravelers + travelers;

    totalBookingsEl.textContent = totalBookings;
    totalTravelersEl.textContent = totalTravelers;
    lastDestinationEl.textContent = destination;

   
    bookingForm.reset();

    
});

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page-section");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Remove active class from all nav links
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Hide all pages
        pages.forEach(p => p.style.display = "none");

        // Show selected page
        const pageId = link.getAttribute("data-page") + "Page";
        document.getElementById(pageId).style.display = "block";
    });
});
