array = [
    {
      "id": 1,
      "rating": 5,
      "name": "zlatan",
      "age": 40,
      "skills": [
        "football",
        "dance",
        "comedy"
      ]
    },
    {
      "id": 2,
      "rating": 5,
      "name": "shah rukh khan",
      "age": 50,
      "skills": [
        "dance",
        "comedy",
        "actor"
      ]
    },
    {
      "id": 2,
      "rating": 4,
      "name": "neymar jr",
      "age": 28,
      "skills": [
        "dance",
        "comedy",
        "football",
        "actor"
      ]
    },
    {
      "id": 2,
      "rating": 5,
      "name": "messi",
      "age": 35,
      "skills": [
        "goat",
        "football"
      ]
    }
  ]
const arr = []
array.forEach(element => {if(element.skills.includes("football")){  arr.push(Object.fromEntries(Object.entries(element).slice(1, 3)));}})
console.log(arr)



