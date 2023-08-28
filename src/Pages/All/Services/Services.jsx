import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';

function Services() {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='mt-24'>
            <div className='text-center mx-auto'>
                <h3 className='text-white bg-cyan-400 p-4 rounded container mx-auto text-xl font-bold'>Our All Product Here</h3>
                <p className='w-1/2 text-gray-400 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 m-4'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    )
}

export default Services;