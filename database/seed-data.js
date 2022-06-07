 

 export const seedData = {
  entries: [
     {
       description: 'This is a description test',
       createdAt: Date.now(),
       status: 'pending',
     },
     {
       description: 'This is a description test 2',
       createdAt: Date.now() - 1000000,
       status: 'in-progress',
     },
     {
       description: 'This is a description test 3',
       createdAt: Date.now() - 100000,
       status: 'finished',
     },
     {
       description: 'This is a description test 4',
       createdAt: Date.now() - 10000,
       status: 'pending',
     },
  ]
 }