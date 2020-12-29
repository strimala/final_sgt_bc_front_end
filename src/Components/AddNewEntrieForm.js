import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function AddNewEntrieForm() {

    const [user_name, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUserNameChange = (event) => setUserName(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    const addNewEntrie = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (user_name === '') {
            errorsForForm.push('Lūdzu ievadi lietotājvārdu');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return;
        }

        await AxiosPost('chat', {
            user_name,
            message
        });
        setLoading(false);
        setUserName('');
        setMessage('');

    };

    const saveButtonText = loading ? 'Publicē...' : 'Publicēt';

    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {errorsElement}
            <Form.Group>
                <Form.Label>Lietotājvārds</Form.Label>
                <Form.Control value={user_name} onChange={handleUserNameChange} disabled={loading} type="text" id="user-name" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Ziņa</Form.Label>
                <Form.Control value={message} onChange={handleMessageChange} disabled={loading} as="textarea" rows={3} id="message" />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" onClick={addNewEntrie} disabled={loading}>
                    {saveButtonText}
                </Button>
            </Form.Group>
        </div>
    )
}

export default AddNewEntrieForm;
