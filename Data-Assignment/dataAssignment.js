const peopleDetails = [
  {
    name: "Rahul",
    age: null,
    livesIn: "Pune",
    employment: {
      isEmployed: true,
      type: "Employed",
      details: {
        role: "Software engineer",
        location: "Pune",
      },
    },
    passion: {
      activities: { Chess: "Playing", Gardening: null },
      passionComments: null,
    },
    pets: [
      {
        animalType: "Dog",
        breed: "Golden Retriever",
        name: "Max",
        age: 4,
        vaccinated: true,
        fullyVaccinated: true,
        activities: ["loves playing fetch in the park"],
      },
    ],
    transportPreference: {
      personalVehicle: {
        having: true,
        vehicleDetails: [
          {
            type: "Car",
            useFor: "Weekend trips",
          },
        ],
      },
      preferenceComment: null,
    },
    studied: ["CSE"],
    others: null,
  },

  {
    name: "Ananya",
    age: 30,
    livesIn: "Bangalore",
    employment: null,
    passion: {
      activities: { Cooking: "Italian" },
      passionComments: "often experiments with Italian recipes",
    },
    pets: [
      {
        animalType: "Bird",
        breed: "Parrot",
        name: "Kiwi",
        age: null,
        vaccinated: true,
        fullyVaccinated: false,
        activities: ["Knows more than 20 phrases", "Mimics voice"],
      },
    ],
    transportPreference: {
      personalVehicle: {
        having: false,
        vehicleDetails: null,
      },
      preferenceComment: "Prefers using public transport",
    },
    studied: ["CSE"],
    others: ["Has a minor knowledge in graphic design"],
  },

  {
    name: "Ramesh",
    age: 45,
    livesIn: "Jaipur",
    employment: {
      isEmployed: true,
      type: "Owns Business",
      details: null,
    },
    passion: {
      activities: { Gardening: "Rose", Reading: "Historical fiction" },
      passionComments: `spends his weekends tending to his rose garden and reading historical
         fiction`,
    },
    pets: [
      {
        animalType: "Cat",
        breed: "Persian",
        name: "Bella",
        age: 3,
        vaccinated: true,
        fullyVaccinated: true,
        activities: ["love lounging in the sun"],
      },
      {
        animalType: "Cat",
        breed: "Persian",
        name: "Leo",
        age: 3,
        vaccinated: true,
        fullyVaccinated: true,
        activities: ["love lounging in the sun"],
      },
    ],
    transportPreference: null,
    studied: null,
    others: null,
  },

  {
    name: "Kavya",
    age: 28,
    livesIn: "Chennai",
    employment: {
      isEmployed: false,
      type: "Unemployed",
      details: null,
    },
    passion: {
      activities: {
        Reading: "Modern fantasy novels",
        "Watching shows": "Si-fi shows",
      },
      passionComments: `She prefers modern fantasy novels and binge-watching
       sci-fi shows in her downtime`,
    },
    pets: [
      {
        animalType: "Rabbit",
        breed: null,
        name: "Snowy",
        age: 2,
        vaccinated: true,
        fullyVaccinated: false,
        activities: [
          "Enjoys hopping around Kavya's backyard and nibbling on carrots",
        ],
      },
    ],
    transportPreference: null,
    studied: null,
    others: ["She is an professional dancer"],
  },
];

const dummy = () => 1;

const questionsArr = [
  {
    question: "How many individuals are currently employed?",
    functionName: (data) => {
      const ans = data.filter(
        (person) => person.employment !== null && person.employment.isEmployed
      ).length;
      return ans + " individuals are currently employed.\n";
    },
  },

  {
    question: "How many people own a car?",
    functionName: (data) => {
      const ans = data.filter(
        (person) =>
          person.transportPreference !== null &&
          person.transportPreference.personalVehicle.having
      ).length;

      return ans + " people own a car.\n";
    },
  },

  {
    question: "How many pets are fully vaccinated?",
    functionName: (data) => {
      const ans = data
        .filter(({ pets }) => pets !== null)
        .flatMap(({ pets }) => pets)
        .filter(({ fullyVaccinated }) => fullyVaccinated).length;
      return ans + " pets are fully vaccinated.\n";
    },
  },

  {
    question:
      "What are the names of all the pets, and what type of animal is each?",
    functionName: (data) => {
      const ans = data
        .filter((person) => person.pet !== null)
        .flatMap((person) => person.pets)
        .map((pet) => {
          return { name: pet.name, typeOfAnimal: pet.animalType };
        });

      const ansStrS = ans.map(
        ({ name, typeOfAnimal }) => name + " is a/an " + typeOfAnimal + ".\n"
      );
      const ansStr =
        "Name of the animals are " +
        ans.map(({ name }) => name).join(", ") +
        ".\n";

      return ansStr + ansStrS.join("");
    },
  },

  {
    question: "Which cities do the individuals live in?",
    functionName: (data) => {
      const ans = data.map((person) => {
        return person.name + " lives in " + person.livesIn + ".\n";
      });

      return ans.join("");
    },
  },

  {
    question: "How many hobbies are shared across the group? What are they?",
    functionName: (data) => {
      const hobbies = data
        .flatMap((person) => Object.keys(person.passion.activities))
        .reduce((uniqueArr, ele) => {
          uniqueArr.includes(ele) || uniqueArr.push(ele);
          return uniqueArr;
        }, []);
      return {
        numOfHobbies: hobbies.length,
        hobbiesList: hobbies,
      };
    },
  },

  {
    question: "How many pets belong to people who are currently unemployed?",
    functionName: (data) =>
      data
        .filter(
          (person) =>
            person.employment === null || !person.employment.isEmployed
        )
        .flatMap((person) => person.pets).length,
  },

  {
    question:
      "What is the average age of the individuals mentioned in the passage?",
    functionName: (data) => {
      const ages = data
        .filter((person) => person.age !== null)
        .map((person) => person.age);
      return ages.reduce((n1, n2) => n1 + n2) / ages.length;
    },
  },

  {
    question:
      "How many individuals have studied computer science, and how many of them have pets?",
    functionName: function (data) {
      const csePeople = data.filter(
        (person) => person.studied !== null && person.studied.includes("CSE")
      );
      const andHavePet = csePeople.filter((person) => person.pets.length > 0);
      return {
        "studied CSE": csePeople.length,
        "and having pets": andHavePet.length,
      };
    },
  },

  {
    question: "How many individuals own more than one pet?",
    functionName: (data) => {
      return data.filter(
        (person) => person.pets !== null && person.pets.length > 1
      ).length;
    },
  },

  {
    question: "Which pets are associated with specific favorite activities?",
    functionName: (data) => {
      return data
        .filter((person) => person.pets !== null)
        .flatMap((person) => person.pets)
        .map((pet) => {
          return { petName: pet.name, activities: pet.activities };
        });
    },
  },

  {
    question:
      "What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    functionName: (data) => {
      return data
        .filter(
          ({ pets, livesIn }) =>
            pets !== null && ["Bangalore", "Chennai"].includes(livesIn)
        )
        .flatMap(({ pets }) => pets)
        .map(({ name }) => name);
    },
  },

  {
    question: "How many vaccinated pets belong to people who do not own a car?",
    functionName: (data) => {
      return data
        .filter(
          ({ transportPreference: tP }) =>
            tP === null || !tP.personalVehicle.having
        )
        .flatMap(({ pets }) => pets)
        .filter(({ fullyVaccinated }) => fullyVaccinated).length;
    },
  },

  {
    question: "What is the most common type of pet among the group?",
    functionName: (data) => {
      const petsDetails = data.flatMap(({ pets }) => pets);
      const petsArray = petsDetails.map(({ animalType }) => animalType);
      const petsFreq = petsArray
        .reduce(function (freqArr, animal) {
          const mappedArr = freqArr.map(({ animal }) => animal);
          mappedArr.includes(animal)
            ? freqArr[mappedArr.indexOf(animal)].freq++
            : freqArr.push({ animal: animal, freq: 1 });
          return freqArr;
        }, [])
        .sort((obj1, obj2) => obj1.freq - obj2.freq);

      return petsFreq.at(-1).animal;
    },
  },

  {
    question: "How many individuals have more than two hobbies?",
    functionName: (data) =>
      data.filter(({ passion }) => passion.activities.length > 2).length,
  },

  {
    question: "How many individuals share at least one hobby with Ramesh?",
    functionName: (data) => {
      const rameshHobbies = Object.keys(
        data.filter(({ name }) => name === "Ramesh").at(-1).passion.activities
      );
      const peopleAndHobbies = data.map(({ name, passion }) => ({
        name: name,
        hobbies: Object.keys(passion.activities),
      }));

      return peopleAndHobbies
        .filter(({ name }) => name !== "Ramesh")
        .filter(({ hobbies }) =>
          hobbies.some((ele) => rameshHobbies.includes(ele))
        ).length;
    },
  },

  {
    question: "Which pet is the youngest, and what is its name?",
    functionName: (data) => {
      return data
        .flatMap((person) => person.pets)
        .filter((pet) => pet !== null)
        .filter(({ age }) => age !== null)
        .sort((pet1, pet2) => pet2.age - pet1.age)
        .at(-1).name;
    },
  },

  {
    question:
      "What types of books are mentioned as interests, and who reads them?",
    functionName: (data) => {
      const hobbies = data
        .flatMap((person) => ({
          name: person.name,
          hobbies: person.passion.activities,
        }))
        .filter((person) => "Reading" in person.hobbies)
        .reduce((readArr, person) => {
          readArr.push({ name: person.name, bookType: person.hobbies.Reading });
          return readArr;
        }, []);
      return hobbies;
    },
  },

  {
    question:
      "How many individuals live in cities starting with the letter 'B'?",
    functionName: (data) => {
      return data
        .filter(({ livesIn }) => livesIn !== null && livesIn[0] === "B")
        .map(({ livesIn }) => livesIn).length;
    },
  },

  {
    question: "Which individuals do not own any pets?",
    functionName: (data) =>
      data
        .filter(({ pets }) => pets === null || pets.length === 0)
        .map(({ name }) => {
          name: name;
        }),
  },
];

function runFun() {
  questionsArr.forEach((ele) => {
    console.log(ele.question + " => ");
    const result = ele.functionName(peopleDetails);
    typeof result === "object" ? console.table(result) : console.log(result);
  });
}

runFun();
