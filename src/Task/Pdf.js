import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from 'react-router-dom';

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'


const Pdf = () => {
    const [pdfFile, setPdfFile] = useState(null)
    const [viewpdf, setViewPdf] = useState(null)

    const fileType = ["application/pdf"]
    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPdfFile(e.target.result)
                }
            }
            else {
                setPdfFile(null)
            }
        }
        else {
            console.log("please select")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
    }
    const newplugin = defaultLayoutPlugin()

    return (
        <div className="container">
            <div className="row">
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Text Editor</Link>
                            </li>
                            <li>
                                <Link to="/pdf">PDF Preview</Link>
                            </li>
                            <li>
                                <Link to="/fieldlinker">Field Linker</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="preview">
                        <form onSubmit={handleSubmit}>
                            <input type="file" className="form-control" onChange={handleChange} />
                            <button type="submit" className="btn btn-sucess" >View PDF</button>
                        </form>

                        <h2>View PDF</h2>
                        <div className="pdf-container">
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                                {viewpdf && <>
                                    <Viewer fileUrl={viewpdf} plugin={[newplugin]} />
                                </>
                                }
                                {!viewpdf && <>No PDF</>

                                }

                            </Worker>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Pdf