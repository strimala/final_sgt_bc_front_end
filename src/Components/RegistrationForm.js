import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

function RegistrationForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [rules, setRules] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUserNameChange = (event) => setUserName(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handlePasswordRetypeChange = (event) => setPasswordRetype(event.target.value);
    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleCountryChange = (event) => setCountry(event.target.value);
    const handleRulesChange = (event) => setRules(event.target.value);

    const addNewUser = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (userName === '') {
            errorsForForm.push('Lūdzu ievadi lietotājvārdu');
        }
        if (password === '' || password.length < 8) {
            errorsForForm.push('Parolei jābūt vismaz 8 simbolus garai');
        }
        if (passwordRetype === '' || passwordRetype !== password) {
            errorsForForm.push('Parolēm ir jāsakrīt');
        }
        if (firstName === '') {
            errorsForForm.push('Lūdzu ievadi savu vārdu');
        }
        if (country === '') {
            errorsForForm.push('Lūdzu izvēlies valsti');
        }
        if (rules === false) {
            errorsForForm.push('Lūdzu iepazīsties ar lietošanas noteikumiem');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return;
        }


        setLoading(false);
        setUserName('');
        setPassword('');
        setPasswordRetype('');
        setFirstName('');
        setLastName('');
        setCountry('Valsts*');
        setRules(false);


    };

    const saveButtonText = loading ? 'Apstrādā...' : 'Iesniegt';

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
            <Form noValidate >
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={userName}
                            onChange={handleUserNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Lietotājvārds*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={loading}
                            type="password"
                            placeholder="Parole*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={passwordRetype}
                            onChange={handlePasswordRetypeChange}
                            disabled={loading}
                            type="password"
                            placeholder="Parole atkārtoti*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={firstName}
                            onChange={handleFirstNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Vārds*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={lastName}
                            onChange={handleLastNameChange}
                            disabled={loading}
                            type="text"
                            placeholder="Uzvārds" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Control
                            value={country}
                            onChange={handleCountryChange}
                            disabled={loading}
                            as="select"
                            required>
                            <option>Valsts*</option>
                            <option>Eldorado</option>
                            <option>Nārnija</option>
                            <option>Aizspogulija</option>
                            <option>Atlanta</option>
                            <option>Utopija</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Form.Check
                            value={rules}
                            onChange={handleRulesChange}
                            disabled={loading}
                            type="checkbox"
                            label="Esmu iepazinies un piekrītu lietošanas noteikumiem*"
                            required />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={6} className="mb-3">
                        <Button variant="primary" onClick={addNewUser} disabled={loading}>
                            {saveButtonText}
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default RegistrationForm;
