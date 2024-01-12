import { deleteRow, insertRow, updateRow } from './crud'
import { RowElement, RowID } from './interface'

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
}

const newRowID: RowID = insertRow(row)
console.log(`Inserted row with ID: ${newRowID}`)

const updatedRow: RowElement = { ...row, age: 23 }

const updatedRowID: RowID = updateRow(newRowID, updatedRow)
console.log(`Updated row ID: ${updatedRowID}`)

deleteRow(updatedRowID)
console.log(`Deleted row ID: ${updatedRowID}`)