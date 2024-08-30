import { useState } from "react";
export default function StudentsForm() {
    const [name, setName] = useState("");
    const [age, , setAge] = useState(0);
    const [location, setLocation] = useState('');
    const [hobbies, setHobbies] = useState('');
    return (
        <>

            <input type="text" name="name" onChange={setName} />

        </>

    );
}