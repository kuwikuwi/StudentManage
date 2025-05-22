
import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate} from "react-router-dom"


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const URI = 'http://localhost:3001'
function CompFormStudent() {


    const[name,setName]=useState()
    const[major,setMajor]=useState()
    const[email,setEmail]=useState()
    const navigate = useNavigate()



    const [majors, setMajors] = useState([])
    useEffect(() => {
        getMajors()
    }, []);


    const getMajors = async () => {
        const res = await axios.get(`${URI}/majors`)
        setMajors(res.data)

    };


    const postAddStudent = async (e) => {
        e.preventDefault()
        console.log(e)
        await axios.post(`${URI}/students/add`,{name: name, major_id: major, email: email})
        navigate(0)

    };



    return (

        <Form onSubmit={postAddStudent}>
            <div className="bg-success  rounded-5 mb-lg-3">
                <h3 className="text-light fs-2">
                    Add Student
                </h3>
            </div>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="Enter student's full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Major</Form.Label>
                <Form.Select

                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                >
                    <option selected  disabled>Select student's major</option>
                    {majors.map((major_item ) => (
                        <option key={major_item.id} value={major_item.id}>{major_item.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter student's email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Button variant="success" type="submit">Submit</Button>

        </Form>
    );
}

export default CompFormStudent;


