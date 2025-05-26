interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 19,
    location: "Seattle"
};

const studentsList: Student[] = [student1, student2];

// Function to create and display a table
function renderTable(): void {
    // Create table and body elements
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Throw each element student in the studentsList into a row
    studentsList.forEach(student => {
        const row = document.createElement('tr');

        // Create a cell for the firstName
        const firstNameColumn = document.createElement('td');
        firstNameColumn.textContent = student.firstName;
        row.appendChild(firstNameColumn);

        // Create a cell for the location
        const locationColumn = document.createElement('td');
        locationColumn.textContent = student.location;
        row.appendChild(locationColumn);

        tbody.appendChild(row);
    });

    // Append the body to the table
    table.appendChild(tbody);
    document.body.appendChild(table);
}
// To execute the function and render the table
renderTable();
