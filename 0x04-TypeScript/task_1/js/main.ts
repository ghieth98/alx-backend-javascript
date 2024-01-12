interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const Student1: Student = {
  firstName: 'Sam',
  lastName: 'Colons',
  age: 40,
  location: 'Germany'
};

const Student2: Student = {
  firstName: 'Colons',
  lastName: 'Sam',
  age: 4,
  location: 'France'
};

const studentList: Student[] = [Student1, Student2];
const props: (keyof Student)[] = ['firstName', 'lastName', 'age', 'location'];

function createTable () {
  const body = document.body,
    table = document.createElement('table');
  table.style.width = '100%';

  for (let i = 0; i < studentList.length; i++) {
    const tr = table.insertRow();
    for (let j = 0; j < props.length; j++) {
      const td = tr.insertCell();
      let student = studentList[i];
      let value: keyof Student = props[j];
      td.appendChild(document.createTextNode(String(student[value])));
      if (i === 1 && j === 1) {
        td.setAttribute('rowSpan', '2');
      }
    }
  }
  body.appendChild(table);
}

createTable();