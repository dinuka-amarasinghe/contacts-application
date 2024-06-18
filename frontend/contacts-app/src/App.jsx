import {useEffect, useState} from 'react'
import {getContacts} from "./api/ContactService.jsx";
import './App.css'
import Header from "./components/Header.jsx";


function App() {
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(0)

    const toggleModal = (show) => {}

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
            <Header toggleModal={toggleModal} nbOfContacts={50} />
        </>
    )
}

export default App
