const personDetails = [
  ["Aarav", "9876543210", 25, "123 MG Road, Mumbai", ["9123456780", "Suresh"]],
  [
    "Ananya",
    "8765432109",
    35,
    "456 Brigade Road, Bengaluru",
    ["8223456781", "Lakshmi"],
  ],
  [
    "Ishaan",
    "7654321098",
    19,
    "789 Park Street, Kolkata",
    ["8323456782", "Ramesh"],
  ],
  [
    "Meera",
    "6543210987",
    42,
    "101 Connaught Place, Delhi",
    ["8423456783", "Sunita"],
  ],
  [
    "Rohan",
    "5432109876",
    28,
    "202 Marine Drive, Chennai",
    ["8523456784", "Arun"],
  ],
  [
    "Priya",
    "4321098765",
    31,
    "303 Sarjapur Road, Hyderabad",
    ["8623456785", "Geeta"],
  ],
  [
    "Kavya",
    "3210987654",
    18,
    "404 Carter Road, Pune",
    ["8723456786", "Rajesh"],
  ],
  [
    "Aditya",
    "2109876543",
    45,
    "505 Residency Road, Ahmedabad",
    ["8823456787", "Vimala"],
  ],
  ["Naina", "1098765432", 23, "606 MG Road, Jaipur", ["8923456788", "Ashok"]],
  [
    "Veer",
    "0198765431",
    37,
    "707 Lodhi Road, Chandigarh",
    ["9023456789", "Manju"],
  ],
];

const personBelow30 = (arr) =>
  arr.filter((ele) => ele[2] < 30).map((ele) => 
    [ele[0], ele[1], ele.at(-1)].flat()
  );

  console.log(personBelow30(personDetails));
