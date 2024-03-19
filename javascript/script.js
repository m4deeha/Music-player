// Create an empty object to store member details
let memberDetails = {};

// Function to add member details
function addMember(id, name, age, email) {
    // Check if the member already exists
    if (memberDetails.hasOwnProperty(id)) {
        console.log(`Member with ID ${id} already exists.`);
    } else {
        // Add member details to the object
        memberDetails[id] = {
            name: name,
            age: age,
            email: email
        };
        console.log(`Member with ID ${id} added successfully.`);
    }
}

// Function to get member details by ID
function getMemberDetails(id) {
    // Check if the member exists
    if (memberDetails.hasOwnProperty(id)) {
        return memberDetails[id];
    } else {
        console.log(`Member with ID ${id} not found.`);
        return null;
    }
}

// Example usage:
addMember(1, "John Doe", 25, "john@example.com");
addMember(2, "Jane Smith", 30, "jane@example.com");

// Access and display member details
let member1 = getMemberDetails(1);
console.log("Member 1 Details:", member1);

let member2 = getMemberDetails(2);
console.log("Member 2 Details:", member2);

let member3 = getMemberDetails(3); // Non-existent member
console.log("Member 3 Details:", member3);



let obj = {};

function browse(id){
    if(obj.hasOwnProperty(id)){
        console.log("doesnt exist!");
    }else{
        obj[id] = {
            id : id,
            name : "shsu",
            age : 30
        };
    }
}


function exis(id){
    if(obj.hasOwnProperty(id)){
        console.log(`Name is ${this.name}`);
    }
}