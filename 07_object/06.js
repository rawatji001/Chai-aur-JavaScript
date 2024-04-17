//! object inside object--------

const regularUser = {
  email: "abc@gmail.com",
  userName: {
    fullName: {
      firstName: "Roshan",
      lastName: "Rawat",
    },
  },

  address: {
    current: "Delhi",
    residental: "Noida",
  },
};

console.log(regularUser);
/*
{
  email: 'abc@gmail.com',
  userName: { fullName: { firstName: 'Roshan', lastName: 'Rawat' } },
  address: { current: 'Delhi', residental: 'Noida' }
}
*/

console.log(regularUser.userName);
// { fullName: { firstName: 'Roshan', lastName: 'Rawat' } }

console.log(regularUser.userName.fullName);
// { firstName: 'Roshan', lastName: 'Rawat' }

console.log(regularUser.userName.fullName.firstName); // Roshan
