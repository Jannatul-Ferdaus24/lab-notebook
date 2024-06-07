const destructureItems = (input) => {
  // Destructure the name and parents of the character
  const {
    first,
    last,
    allegiance: {
      parents: { mother, father },
    },
  } = input;

  // Format the output
  return `${first} ${last}\n  daughter of\n  ${mother} and ${father}`;
};

const sansa = {
  first: "Sansa",
  last: "Stark",
  allegiance: {
    house: "Winterfell",
    parents: {
      mother: "Catelyn Tully",
      father: "Eddard Stark",
    },
    animals: {
      direwolf: "Lady",
    },
  },
};

const daenerys = {
  first: "Daenerys",
  last: "Targaryen",
  allegiance: {
    house: "Targaryen",
    parents: {
      mother: "Queen Rhaella",
      father: "King Aerys II Targaryen",
    },
    animals: {
      dragons: "Drogon",
    },
  },
};

console.log(destructureItems(sansa));
// expected: 'Sansa Stark\n  daughter of\n  Catelyn Tully and Eddard Stark'
console.log(destructureItems(daenerys));
// expected: 'Daenerys Targaryen\n  daughter of\n  Queen Rhaella and King Aerys II Targaryen'
