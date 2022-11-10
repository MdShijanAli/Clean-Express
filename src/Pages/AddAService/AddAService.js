import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';

const AddAService = () => {
    useTitle('Add a Service')
    const { user } = useContext(AuthContext);
    const email = user.email;

    const AddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;


        const service = {
            name,
            photo,
            price,
            description,
            email


        }
        console.log(service);

        fetch('https://assignment-11-server-phi.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Sucessfully!!!');
                    event.target.reset();
                }
                console.log(data)
            })
    }
    return (
        <form className='w-full my-20' onSubmit={AddService}>

            <div className="container mx-auto my-4 px-4 lg:px-20">

                <div className="w-full p-8 my-4 md:px-12 lg:w-full   mr-auto rounded-2xl shadow-gray-800 shadow-2xl">
                    <div>
                        <h1 className="font-bold text-center uppercase text-3xl">Add A service</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg input-bordered input-primary"
                            type="text" placeholder="Name*" required />
                        <input name='price' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg input-bordered input-primary"
                            type="number" placeholder="Service Price*" required />



                    </div>
                    <div className=" mt-5">
                        <input name='photo' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg input-bordered input-primary"
                            type="text" placeholder="Service Photo URL*" required />



                    </div>
                    <div className="my-4">
                        <textarea name='description' placeholder="Service Details*" className="w-full h-60 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg input-bordered input-primary" required></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4 mx-auto">
                        <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </div>


            </div>




        </form>
    );
};

export default AddAService;