function lookupName() {
    var id = document.getElementById("idInput").value;
    
    // Here, you would replace this logic with code to actually retrieve the name
    // associated with the given ID from your database or wherever the data is stored.
    // For this example, let's assume we have a simple dictionary mapping IDs to names.
    var idToName = {
        "001": "John Doe",
        "002": "Jane Smith",
        "Bassam": "Best Designer and programmer",
        "Baraa": "Best researcher",
        "Nehad": "Masar leader",
        // Add more ID to Name mappings here
    };

    var name = idToName[id];
    
    if (name) {
        document.getElementById("nameOutput").textContent = "Name: " + name;
    } else {
        document.getElementById("nameOutput").textContent = "Name not found for ID: " + id;
    }
}
