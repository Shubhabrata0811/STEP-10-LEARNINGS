#Problem

**Problem Statement**

Read the passage below carefully and organize the information into some data in Javascript. Use your organized structure to answer the following questions. The goal is to not write code to answer the questions at the end. The goal is to organise data correctly.

**Data Text**

**<span style="color:red">Rahul</span>**, a software engineer from Pune, enjoys playing chess and gardening when he's not busy coding. He owns a golden retriever named Max, who is 4 years old, fully vaccinated, and loves playing fetch in the park. **<span style="color:red">Rahul</span>** is currently employed and has a car that he uses for weekend trips. Meanwhile, **<span style="color:red">Ananya</span>**, who recently turned 30 and lives in Bangalore, is passionate about cooking and often experiments with Italian recipes. She has a parrot named Kiwi, who knows over 20 phrases, mimics her voice, and is also vaccinated. Unlike **<span style="color:red">Rahul</span>**, **<span style="color:red">Ananya</span>** doesn’t own a car but prefers using public transport. Both **<span style="color:red">Rahul</span>** and **<span style="color:red">Ananya</span>** studied computer science in college, though **<span style="color:red">Ananya</span>** also has a minor in graphic design. **<span style="color:red">Ramesh</span>**, a 45-year-old business owner from Jaipur, has little in common with them, except for his love of gardening. He spends his weekends tending to his rose garden and reading historical fiction. **<span style="color:red">Ramesh</span>** has two Persian cats, Bella and Leo, who are 3 years old, fully vaccinated, and love lounging in the sun. Unlike **<span style="color:red">Ramesh</span>**, **<span style="color:red">Kavya</span>**, who’s 28 and a professional dancer from Chennai, prefers modern fantasy novels and binge-watching sci-fi shows in her downtime. **<span style="color:red">Kavya</span>** has a rescue rabbit named Snowy, who is 2 years old, vaccinated, and enjoys hopping around her backyard and nibbling on carrots. **<span style="color:red">Kavya</span>**, however, is currently unemployed and does not own a vehicle.

**Hypothetical Questions:**

1. How many individuals are currently employed?
2. How many people own a car?
3. How many pets are fully vaccinated?
4. What are the names of all the pets, and what type of animal is each?
5. Which cities do the individuals live in?
6. How many hobbies are shared across the group? What are they?
7. How many pets belong to people who are currently unemployed?
8. What is the average age of the individuals mentioned in the passage?
9. How many individuals have studied computer science, and how many of them have pets?
10. How many individuals own more than one pet?
11. Which pets are associated with specific favorite activities?
12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
13. How many vaccinated pets belong to people who do not own a car?
14. What is the most common type of pet among the group?
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with **<span style="color:red">Ramesh</span>**?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?

**Data Table:**

| _Person_ | _Name_                                    | _Age_ | _Employment_                     | _Passion_                               | _Pet_ {NoOfPets:}                               | _Vehicle_             | _study_                  | _LivesIn_ | _transport_ |
| -------- | ----------------------------------------- | ----- | -------------------------------- | --------------------------------------- | ----------------------------------------------- | --------------------- | ------------------------ | --------- | ----------- |
|          | **<span style="color:red">Rahul</span>**  | N/A   | Employed: true                   | [chess, gardening]                      | Species: Dog                                    | Type: Car             | Degree:{UG: CSE}         | Pune      | N/A         |
|          |                                           |       | Designation: software engineer   | moreDetails: N/P                        | Breed: golden retriever                         | UseFor: weekend trips |                          |           |             |
|          |                                           |       | Location: Pune                   |                                         | Name: Max                                       |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Age: 4                                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Vaccinated: true                                |                       |                          |           |             |
|          |                                           |       |                                  |                                         | fullyVaccinated: true                           |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Activity: loves playing fetch in the park       |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          | **<span style="color:red">Ananya</span>** | 30    | Employed: false                  | [cooking]                               | Species: Bird                                   | Type: N/A             | Degree:{UG: CSE}         | Bangalore | Public TP   |
|          |                                           |       | Designation: n/a                 | moreDetails: Italian recipes            | Breed: Parrot                                   | UseFor: N/A           | moreDetails: minor in GD |           |             |
|          |                                           |       | Location: n/a                    |                                         | Name: Kiwi                                      |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Age: N/A                                        |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Vaccinated: true                                |                       |                          |           |             |
|          |                                           |       |                                  |                                         | fullyVaccinated: false                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Activity: [knows over 20 phrases, mimics voice] |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          | **<span style="color:red">Ramesh</span>** | 45    | Employed: true                   | [gardening, reading historical fiction] | Species: Cat                                    | Type: N/A             | Degree: N/A              | Jaipur    | N/A         |
|          |                                           |       | Designation: business owner      | moreDetails: N/A                        | Breed: Persian                                  | UseFor: N/A           |                          |           |             |
|          |                                           |       | Location: Jaipur                 |                                         | Name: Bella                                     |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Age: 3                                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Vaccinated: true                                |                       |                          |           |             |
|          |                                           |       |                                  |                                         | fullyVaccinated: true                           |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Activity: love lounging in the sun              |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Species: Cat                                    |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Breed: Persian                                  |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Name: Leo                                       |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Age: 3                                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Vaccinated: true                                |                       |                          |           |             |
|          |                                           |       |                                  |                                         | fullyVaccinated: true                           |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Activity: love lounging in the sun              |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |
|          | **<span style="color:red">Kavya</span>**  | 28    | Employed: false                  | [reading novels, watching sci-fi shows] | Species: Rabbit                                 | Type: N/A             | Degree: N/A              | Chennai   | N/A         |
|          |                                           |       | Designation: professional dancer | moreDetails: N/A                        | Breed: N/A                                      | UseFor: N/A           |                          |           |             |
|          |                                           |       | Location: Chennai                |                                         | Name: Snowy                                     |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Age: 2                                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Vaccinated: true                                |                       |                          |           |             |
|          |                                           |       |                                  |                                         | fullyVaccinated: false                          |                       |                          |           |             |
|          |                                           |       |                                  |                                         | Activity: enjoys hopping around backyard        |                       |                          |           |             |
|          |                                           |       |                                  |                                         |                                                 |                       |                          |           |             |

**Expected Answer:**

**How many individuals are currently employed?**  
2

**How many people own a car?**  
1

**How many pets are fully vaccinated?**  
3

**What are the names of all the pets, and what type of animal is each?**  
| Name  | Type of Animal |
|-------|----------------|
| Max   | Dog            |
| Kiwi  | Bird           |
| Bella | Cat            |
| Leo   | Cat            |
| Snowy | Rabbit         |

**Which cities do the individuals live in?**  
| Name    | City       |
|---------|------------|
| Rahul   | Pune       |
| Ananya  | Bangalore  |
| Ramesh  | Jaipur     |
| Kavya   | Chennai    |

**How many hobbies are shared across the group? What are they?**  
| Number of Hobbies | Hobbies List                           |
|-------------------|----------------------------------------|
| 5                 | Chess, Gardening, Cooking, Reading, Watching shows |

**How many pets belong to people who are currently unemployed?**  
2

**What is the average age of the individuals mentioned in the passage?**  
34.33

**How many individuals have studied computer science, and how many of them have pets?**  ****
| Studied CSE | Have Pets |
|-------------|-----------|
| 2           | 2         |

**How many individuals own more than one pet?**  
1

**Which pets are associated with specific favorite activities?**  
| Pet Name | Activities                                      |
|----------|-------------------------------------------------|
| Max      | Loves playing fetch in the park                 |
| Kiwi     | Knows more than 20 phrases, Mimics voice        |
| Bella    | Loves lounging in the sun                       |
| Leo      | Loves lounging in the sun                       |
| Snowy    | Enjoys hopping around Kavya's backyard and nibbling on carrots |

**What are the names of all animals that belong to people who live in Bangalore or Chennai?**  
| Name  |
|-------|
| Kiwi  |
| Snowy |

**How many vaccinated pets belong to people who do not own a car?**  
2

**What is the most common type of pet among the group?**  
Cat

**How many individuals have more than two hobbies?**  
0

**How many individuals share at least one hobby with Ramesh?**  
2

**Which pet is the youngest, and what is its name?**  
Snowy

**What types of books are mentioned as interests, and who reads them?**  
| Name   | Book Type              |
|--------|------------------------|
| Ramesh | Historical fiction     |
| Kavya  | Modern fantasy novels  |

**How many individuals live in cities starting with the letter 'B'?**  
1

**Which individuals do not own any pets?**  
None



**Output:**

```text

How many individuals are currently employed? => 
2
How many people own a car? => 
1
How many pets are fully vaccinated? => 
3
What are the names of all the pets, and what type of animal is each? => 
┌─────────┬─────────┬──────────────┐
│ (index) │ name    │ typeOfAnimal │
├─────────┼─────────┼──────────────┤
│ 0       │ 'Max'   │ 'Dog'        │
│ 1       │ 'Kiwi'  │ 'Bird'       │
│ 2       │ 'Bella' │ 'Cat'        │
│ 3       │ 'Leo'   │ 'Cat'        │
│ 4       │ 'Snowy' │ 'Rabbit'     │
└─────────┴─────────┴──────────────┘
Which cities do the individuals live in? => 
┌─────────┬──────────┬─────────────┐
│ (index) │ name     │ livesIn     │
├─────────┼──────────┼─────────────┤
│ 0       │ 'Rahul'  │ 'Pune'      │
│ 1       │ 'Ananya' │ 'Bangalore' │
│ 2       │ 'Ramesh' │ 'Jaipur'    │
│ 3       │ 'Kavya'  │ 'Chennai'   │
└─────────┴──────────┴─────────────┘
How many hobbies are shared across the group? What are they? => 
┌──────────────┬─────────┬─────────────┬───────────┬───────────┬──────────────────┬────────┐
│ (index)      │ 0       │ 1           │ 2         │ 3         │ 4                │ Values │
├──────────────┼─────────┼─────────────┼───────────┼───────────┼──────────────────┼────────┤
│ numOfHobbies │         │             │           │           │                  │ 5      │
│ hobbiesList  │ 'Chess' │ 'Gardening' │ 'Cooking' │ 'Reading' │ 'Watching shows' │        │
└──────────────┴─────────┴─────────────┴───────────┴───────────┴──────────────────┴────────┘
How many pets belong to people who are currently unemployed? => 
2
What is the average age of the individuals mentioned in the passage? => 
34.333333333333336
How many individuals have studied computer science, and how many of them have pets? => 
┌─────────────────┬────────┐
│ (index)         │ Values │
├─────────────────┼────────┤
│ studied CSE     │ 2      │
│ and having pets │ 2      │
└─────────────────┴────────┘
How many individuals own more than one pet? => 
1
Which pets are associated with specific favorite activities? => 
┌─────────┬─────────┬──────────────────────────────────────────────────────────────────────┐
│ (index) │ petName │ activities                                                           │
├─────────┼─────────┼──────────────────────────────────────────────────────────────────────┤
│ 0       │ 'Max'   │ [ 'loves playing fetch in the park' ]                                │
│ 1       │ 'Kiwi'  │ [ 'Knows more than 20 phrases', 'Mimics voice' ]                     │
│ 2       │ 'Bella' │ [ 'love lounging in the sun' ]                                       │
│ 3       │ 'Leo'   │ [ 'love lounging in the sun' ]                                       │
│ 4       │ 'Snowy' │ [ "Enjoys hopping around Kavya's backyard and nibbling on carrots" ] │
└─────────┴─────────┴──────────────────────────────────────────────────────────────────────┘
What are the names of all animals that belong to people who live in Bangalore or Chennai? => 
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 'Kiwi'  │
│ 1       │ 'Snowy' │
└─────────┴─────────┘
How many vaccinated pets belong to people who do not own a car? => 
2
What is the most common type of pet among the group? => 
Cat
How many individuals have more than two hobbies? => 
0
How many individuals share at least one hobby with Ramesh? => 
2
Which pet is the youngest, and what is its name? => 
Snowy
What types of books are mentioned as interests, and who reads them? => 
┌─────────┬──────────┬─────────────────────────┐
│ (index) │ name     │ bookType                │
├─────────┼──────────┼─────────────────────────┤
│ 0       │ 'Ramesh' │ 'Historical fiction'    │
│ 1       │ 'Kavya'  │ 'Modern fantasy novels' │
└─────────┴──────────┴─────────────────────────┘
How many individuals live in cities starting with the letter 'B'? => 
1
Which individuals do not own any pets? => 
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
```