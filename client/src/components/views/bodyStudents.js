import CompFormStudent from "../formStudent";
import CompShowStudents from "../showStudents";

function CompBodyStudents() {






    return (


        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <CompFormStudent></CompFormStudent>
                </div>
                <div className="col-md-1"/>
                <div className="col-md-7">
                    <CompShowStudents></CompShowStudents>
                </div>
            </div>
        </div>


    );
}

export default CompBodyStudents;


/*



    return (

        <div >

            <h3>Add Task</h3>
            <form action="/tasks/add" method="POST">
                <div className="mb-3" >
                    <label form="title">Write a title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        id="title"
                        className="form-control"
                    />
                </div>

                <div className="mb-3" >
                    <label form="description">Write a description:</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        id="description"
                        className="form-control"
                    ></textarea>
                </div>

                <button className="btn btn-primary" type="submit" >Add</button>

            </form>
        </div>


    )
};
export default CompFormTasks;


*/
