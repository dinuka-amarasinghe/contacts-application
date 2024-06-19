import {useState, useRef, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {getContact} from "../api/ContactService.jsx";

const ContactDetail = ({updateContact, updateImage}) => {
    const inputRef = useRef();
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

    const selectImage = () => {

    };

    const updatePhoto = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('id', id);
            const {data} = await updateImage(formData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContact(id);
    }, []);

    return (
        <>
            <Link to={'/contacts'} className="link">
                <i className="bi bi-arrow-left"></i>&nbsp;Back to list
            </Link>
            <div className="profile">
                <div className="profile__details">
                    <img src={contact.photoUrl} alt={`profile photo ${contact.name}`}/>
                    <div className="profile__metadata">
                        <p className="profile__name">{contact.name}</p>
                        <p className="profile__muted">JPG, GIF, or PNG. Max size of 10MB.</p>
                        <button onClick={selectImage} className="btn"><i className="bi bi-cloud-upload"></i>Change Photo
                        </button>
                    </div>
                </div>
                <div className="profile__settings">Setting will go here</div>
            </div>
            <form style={{display: 'none'}}>
                <input type="file" ref={inputRef} onChange={(e) => updatePhoto(e.target.files[0])} name="file"
                       accept="image/*"/>
            </form>
        </>
    );
};

export default ContactDetail;