import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () =>{
    const form = useRef<HTMLFormElement>(null);

    type formType = {
        first_name? : string,
        last_name?: string,
        email?: string,
        subject?: string,
        message?:string

    }
    const [errors, setErrors] = useState<formType>({});

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        // Validation logic
        const formData = new FormData(form.current!);
        let isValid = true;

        formData.forEach((value, key) => {
            if(!value){

                setErrors((prev) => {
                    return {
                        ...prev,
                        [key]: `please fill in ${key}`
                    }
                });

                if(key !== 'auswahl_fachgebiet'){

                    setErrors((prev) => {
                            return {
                                ...prev,
                                ['auswahl_fachgebiet']: `please select Auswahl Fachgebiet`
                            }
                        }
                    )}

                isValid = false;
            }

        });

        // Send email
        if (form.current && isValid) {
            emailjs
                .sendForm('service_sacrz6b', 'template_x8ukpj2', form.current, {
                    publicKey: 'i2eBRbtPk31_7lxmf',
                })
                .then(
                    () => {
                        alert('Message has been sent !!');
                        form.current!.reset();
                    },
                    () => {
                        alert('Oops, something went wrong.. !!');
                    },
                );
        }
    };
    return(
        <>
            <form onSubmit={sendEmail} ref={form} className="p-4 bg-white rounded-lg shadow-xl shadow-gray-200">
                <div className="flex flex-col gap-y-3">
                    <div className={`flex gap-x-6 gap-y-2 md:flex-row flex-col`}>
                        <label className='w-full' htmlFor="name"><span>Name<span
                            className='text-secondary'>*</span></span><br/>
                            <input type="text"
                                   name="first_name"
                                   className="p-2 border border-gray-300 outline-none focus:border-gray-500 rounded-lg w-full"
                                   placeholder='Enter Name'/>
                            <p className="text-secondary text-xs font-bold">{errors.first_name}</p>
                        </label>

                        <label className='w-full' htmlFor="lastName"><span>Last Name<span
                            className='text-secondary'>*</span></span><br/>
                            <input type="text"
                                   name="last_name"
                                   className="p-2 border border-gray-300 outline-none focus:border-gray-500 rounded-lg w-full"
                                   placeholder='Enter Last Name'/>
                            <p className="text-secondary text-xs font-bold">{errors.last_name}</p>
                        </label>
                    </div>

                    <label className='w-full' htmlFor="subject"><span>Subject<span
                        className='text-secondary'>*</span></span><br/>
                        <input type="text"
                               name="subject"
                               className="p-2 border border-gray-300 outline-none focus:border-gray-500 rounded-lg w-full"
                               placeholder='Enter Subject'/> <p
                            className="text-secondary text-xs font-bold">{errors.subject}</p>
                    </label>

                    <label className='w-full' htmlFor="email"><span>Email<span
                        className='text-secondary'>*</span></span><br/>
                        <input type="text"
                               name="email"
                               className="p-2 border border-gray-300 outline-none focus:border-gray-500 rounded-lg w-full"
                               placeholder='Email'/>
                        <p className="text-secondary text-xs font-bold">{errors.email}</p>
                    </label>
                    <label className='w-full' htmlFor="name"><span>Message<span
                        className='text-secondary'>*</span></span><br/>
                        <textarea rows={4}
                                  name="message"
                                  className="p-2 border border-gray-300 outline-none focus:border-gray-500 rounded-lg w-full"
                                  placeholder='Enter your message'>
                        </textarea>
                        <p className="text-secondary text-xs font-bold">{errors.message}</p>
                    </label>

                    <button className="px-5 py-2 bg-secondary text-white w-fit p1">Send</button>
                </div>
            </form>
        </>
    )
}

export default ContactForm