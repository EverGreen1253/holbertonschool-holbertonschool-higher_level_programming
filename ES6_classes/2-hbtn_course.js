export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!Number.isNaN(name)) {
      throw new TypeError('Name must be a string');
    }
    if ((typeof length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Not an array');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (!Number.isNaN(newName)) {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    if ((typeof newLen) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Number(newLen);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Not an array');
    }
    this._students = newStudents;
  }
}
