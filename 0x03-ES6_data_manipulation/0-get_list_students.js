/**
 * Retrieves a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Gilly', location: 'San Francisco' },
    { id: 2, firstName: 'Gray', location: 'Columbia' },
    { id: 5, firstName: 'Selorm', location: 'San Francisco' },
  ];
}
