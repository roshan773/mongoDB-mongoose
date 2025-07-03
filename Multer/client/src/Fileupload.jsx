import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Fileupload = ({getdata}) => {

    const [file, setfile] = useState("")

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
            setfile("")
            getdata();
            console.log("File Uploaded Successfully")

        } catch (error) {
            console.log("Error Uploading file", error)
        }
    }
    return (
        <div className="container mt-5">
            <div className="card p-4 shadow rounded">
                <h5 className="mb-3">Upload File</h5>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(e) => setfile(e.target.files[0])}
                    />
                </div>
                <button className="btn btn-primary w-100" onClick={handleChange}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Fileupload