import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import {getContacts} from "./api/ContactService.jsx";
import ContactList from "./components/ContactList.jsx";
import {Route, Routes, Navigate} from "react-router-dom";

function App() {
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(0)

    const toggleModal = (show) => {
        console.log("I was clicked!")
    }

    const getAllContacts = async (page= 0, size = 10) => {
        try {
            setCurrentPage(page)
            const {data} = await getContacts(page, size)
            setData(data)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllContacts()
    }, []);

    return (
        <>
            <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
            <main>
                <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to={'/contacts'}/>}/>
                    <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
                </Routes>
                </div>
            </main>
        </>
    )
}

export default App
