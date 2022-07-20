import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 11, name: 'Edard', lastName : 'Stark' , gpa: 4 },
      { id: 12, name: 'Viserys', lastName : 'Targaryan' , gpa: 1 },
      { id: 13, name: 'Robert', lastName : 'Baratheon' , gpa: 2 },
      { id: 14, name: 'Jaime', lastName : 'Lannister' , gpa: 2 },
      { id: 15, name: 'Daenerys', lastName : 'Targaryen' , gpa: 3 },
      { id: 16, name: 'Tyrion', lastName : 'Lannister' , gpa: 4 },
      { id: 17, name: 'Khal', lastName : 'Drogo' , gpa: 4 },
      { id: 18, name: 'Sandor', lastName : 'Clegane' , gpa: 3 },
      { id: 19, name: 'Arya', lastName : 'Stark' , gpa: 3 },
      { id: 20, name: 'Tormund', lastName : 'Giantsbane' , gpa: 4 }
    ];
    return {students};
  }
}
