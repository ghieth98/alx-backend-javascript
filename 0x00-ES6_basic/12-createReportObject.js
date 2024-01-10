export default function createReportObject (employeesList) {
  const employeesObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments (employeesList) {
      return Object.keys(employeesList).length
    },
  }

  return employeesObject
}