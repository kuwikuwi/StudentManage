import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom"

const URI = 'http://localhost:3001'

const CompShowStudents =()=> {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
    }, []); 


    const getStudents = async () => {
        const res = await axios.get(`${URI}/students`)
        setStudents(res.data)

    };

    const deleteStudent = async (id) => {
        await axios.delete(`${URI}/students/${id}/delete`)
        await getStudents()

    };


    return (
        <div>
            {students.length > 0
                ?
                <div>
                    <div className="bg-success  rounded-5 mb-lg-3">
                        <h3 className="text-light fs-2">
                            List Students
                        </h3>
                    </div>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>N</th>
                                <th>Name</th>
                                <th>Major</th>
                                <th>Email</th>
                                <th>options</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.major_id}</td> {/* Assuming major_id for now, will be major.name later */}
                                    <td>{student.email}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}><i
                                            className="fa-solid fa-trash"></i></button>

                                        <Link className="btn btn-info" to={`/students/${student.id}/edit`}><i
                                            className="fa-solid fa-pen-to-square"></i></Link>

                                    </td>
                                </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <div>
                    <div className="bg-secondary  rounded-5 mb-lg-3">
                        <h1 className="text-light fs-2">No students</h1>
                    </div>
                    <i className="fa-solid fa-file fa-8x"></i>
                </div>

            }
        </div>
    )

};
export default CompShowStudents;
