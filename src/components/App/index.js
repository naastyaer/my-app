import { useState } from 'react';
import 'components/App/App.css';
import Button from 'components/Button';
import Header from 'components/Header';
import Student from 'components/Student';
import Footer from 'components/Footer';
function App() {
    
    const [students, setStudents] = useState( [
            {
                firstName: "Анна",
                lastName: "Иванова",
                age: 12,
                course: 'Рисование'
            },
            {
                firstName: 'Олег',
                LastName: "Петров",
                age: 32,
                course: 'Программирование'
            },
            {
                firstNames:'Ирина',
                lastName: 'Семенова',
                age: 28,
                course: 'Пограммирование'
            },
            {
                firstName: "Екатерина",
                lastName: "Степанова",
                age: 30, 
                course:"Психология"   
            }
    ])   
    const deleteStudent = (id) => {
        const filteredtudents = students.filter(student => student.id !== id)
        console.log(id)
        setStudents (filteredtudents)
    }
    return(
        <div>
            <Header/>
            <div className="max-w-screen-lg mx-auto"> 
                {students.map( (student) => {
                return (<Student key={student.id} student={student} deleteStudent={deleteStudent}/>)
                })}
            </div>
            <Footer/>
        </div>
        
    )       
}
export default App
