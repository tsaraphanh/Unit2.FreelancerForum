document.addEventListener("DOMContentLoaded", ()=> {
    // Initialize arrays
    const possibleNames = ["John", "Steve", "Michelle", "David", "Eve", "Justin", "Alexis"];
    const possibleOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant", "Multimedia Editor", "Translator"];
    const freelancers = [];

    // Function to calculate the average starting price
    function calcAveragePrice() {
        if (freelancers.length === 0) {
            return 0;
        }
        const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        return totalPrice / freelancers.length;
    }

    // Function to generate a random freelancer
    function generateRandomFreelancer() {
        const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
        const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
        const randomStartingPrice = Math.floor(Math.random() * 100) + 30; // Starting price between $30 and $129
        return {
            name: randomName,
            occupation: randomOccupation,
            startingPrice: randomStartingPrice,
        };
    }

    // Function to render freelancers on the table
    function renderFreelancers() {
        const tableBody = document.querySelector("#freelancersTable tbody");
        tableBody.innerHTML = ""; // Clear the existing rows

        freelancers.forEach(freelancer => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${freelancer.name}</td>
                <td>${freelancer.occupation}</td>
                <td>$${freelancer.startingPrice}</td>
            `;
            tableBody.appendChild(row);
        });

        // Update the average starting price
        const averagePrice = calcAveragePrice();
        document.querySelector("#averagePrice").textContent = `$${averagePrice.toFixed(2)}`;
    }

    // Add initial freelancers
    freelancers.push(
        { name: "Alice", occupation: "Writer", startingPrice: 30 },
        { name: "Bob", occupation: "Teacher", startingPrice: 50 },
        { name: "Carol", occupation: "Programmer", startingPrice: 70 }
    );

    // Set an interval to add new freelancers
    setInterval(() => {
        const newFreelancer = generateRandomFreelancer();
        freelancers.push(newFreelancer);
        renderFreelancers();
    }, 5000); // Add a new freelancer every 5 seconds

    // Render initial freelancers
    renderFreelancers();
});
