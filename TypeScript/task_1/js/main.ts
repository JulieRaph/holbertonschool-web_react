interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// New interface to defin a function that takes a Teacher
interface printTeacherFunction {
    (Teacher: Teacher): string;
}

// function to print the first initial and last name of a teacher
function printTeacher(Teacher : Teacher): string {
    return `${Teacher.firstName[0]}. ${Teacher.lastName}`;
}

console.log(printTeacher(teacher3));


// Extending the Teacher interface to create Directors interface
interface Directors extends Teacher {
    numberOfReports: number; 
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Interface for the constructor
interface StudentConstructor {
    new(firstName: string, lastName: string) : StudentClass;
}

// Interface for the Class Structure
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Function for Student Class
class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}

console.log(new StudentClass('John', 'Doe').workOnHomework());
