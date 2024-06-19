import {useState, useRef, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getContact} from "../api/ContactService.jsx";

const ContactDetail = ({updateContact, updateImage}) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        title: '',
        status: '',
        photoUrl: '',
    });

    const {id} = useParams();
    console.log(id);

    const fetchContact = async (id) => {
        try {
            const {data} = await getContact(id);
            setContact(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>Contact Detail</div>
    );
};

export default ContactDetail;