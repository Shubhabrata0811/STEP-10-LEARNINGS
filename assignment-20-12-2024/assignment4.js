/*
Fourth one:


The structure of the person record has been updated. The details now appear in
 the following order:  
- **Name** (string)  
- **Age** (number)  
- **Phone number** (number)  
- **Address** (string)  
- **Guardian** (a person record referencing the guardian's name and phone
 number)

Both the phone numbers (for the person and guardian) are now stored as numbers,
 not strings.

Given a list of 10 such person records, write a function to find the **names and
 ages of guardians** for people older than 20 years. Only include guardians
  whose names appear in the list of people. Guardians not present in the list
   should be excluded.


```
[
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
  ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
  ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
]
```

Aarav is the guardian of Ishaan, and Rohan is the guardian of Aarav.
Lakshmi is a guardian not belonging to the list.

*/

const peopleDetails = [
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  [
    "Ananya",
    35,
    8765432109,
    "456 Brigade Road, Bengaluru",
    ["Lakshmi", 8223456781],
  ],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  [
    "Meera",
    42,
    6543210987,
    "101 Connaught Place, Delhi",
    ["Sunita", 8423456783],
  ],
  [
    "Rohan",
    28,
    5432109876,
    "202 Marine Drive, Chennai",
    ["Lakshmi", 7654321098],
  ],
  [
    "Priya",
    31,
    4321098765,
    "303 Sarjapur Road, Hyderabad",
    ["Geeta", 8623456785],
  ],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  [
    "Aditya",
    45,
    2109876543,
    "505 Residency Road, Ahmedabad",
    ["Vimala", 8823456787],
  ],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  [
    "Veer",
    37,
    1987654321,
    "707 Lodhi Road, Chandigarh",
    ["Rajesh", 8723456786],
  ],
];

const namesArr = peopleDetails.map((ele) => ele[0]);

const getNameAndAge = (nameStr) => {
  return [nameStr, peopleDetails[namesArr.indexOf(nameStr)][1]];
};

const guardianAvailable = peopleDetails.filter((ele) =>
  namesArr.includes(ele.at(-1)[0])
);

const guardiansDetails = guardianAvailable
  .filter((ele) => ele[1] > 20)
  .map((ele) => getNameAndAge(ele.at(-1)[0]));
