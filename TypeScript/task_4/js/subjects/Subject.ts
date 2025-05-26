/// <reference path="./Teacher.ts" />


namespace Subjects {
    export class Subject {
        teacher: Subjects.Teacher | undefined;

        setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }
    }
}