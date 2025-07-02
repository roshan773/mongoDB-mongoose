import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Fileupload = () => {

    const [file, setfile] = useState(null)

    const handleChange = async () => {
        console.log(file);
        try {
            const res = await axios.post("http://localhost:8080/api/file/upload", { file },
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                    body: JSON.stringify({ file })
                })

            if (!res.ok) {
                console.log("Network response is not OK")
            }

            console.log("File Uploaded Successfully")

        } catch (error) {
            console.log("Error Uploading file", error)
        }
    }
    return (
        <div>

            <input type="file" name="" id="" onChange={(e) => setfile(e.target.files[0])} />
            <button onClick={handleChange}>SUBMIT</button>

        </div>
    )
}

export default Fileupload