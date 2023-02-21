import { useState } from 'react';
import 'components/App/App.css';
import Button from 'components/Button';
import Header from 'components/Header';
import Student from 'components/Student';
import Footer from 'components/Footer';
function App() {
    
    const [students, setStudents] = useState( [
            {
                id: 1,
                firstName: "Анна",
                lastName: "Иванова",
                age: 12,
                course: 'Рисование'
            },
            {
                id: 2,
                firstName: 'Олег',
                LastName: "Петров",
                age: 32,
                course: 'Программирование'
            },
            {
                id: 3,
                firstNames:'Ирина',
                lastName: 'Семенова',
                age: 28,
                course: 'Пограммирование'
            },
            {
                id: 4,
                firstName: "Екатерина",
                lastName: "Степанова",
                age: 30, 
                course:"Психология"   
            }
    ])   
    const deleteStudent = (id) => {
        const filteredstudents = students.filter(student => student.id !== id)
        
        setStudents (filteredstudents)
    }
    return(
        <div>
            <Header/>
            <div className="max-w-screen-lg mx-auto min-h-screen">
                {students.length ===0 && (
                    <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет студентов</div>
                )}
             
                {students.length > 0 && students.map( (student) => {
                return (<Student key={student.id} student={student} deleteStudent={deleteStudent}/>)
                })}
            </div>
            <Footer/>
        </div>
        
    )       
}
export default App
