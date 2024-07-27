import Page from '../layouts/Page.tsx';

import Header from '../components/Header.tsx';
import ContactForm from "../components/ContactForm.tsx";

const GetQuestion = () => {
    return (
        <>
        <Header heading='Get a Question' />
            <Page>
                <ContactForm />
            </Page>
        </>
    )
}

export default GetQuestion
