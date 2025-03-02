import { useEffect, useState } from "react";
import axios from "axios";
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


const Phones = () => {
    const [phone, setPhone] = useState([]);
    // Module 44-7
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData = data.data.data;
            const fakePhone = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                };
                return obj;
            });

            console.log(fakePhone);
            setPhone(fakePhone);
        });
    },[]);

    return (
        <div>
            <h1>Phone: {phone.length}</h1>
                <BarChart width={1200} height={400} data={phone}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={'name'}/>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
        </div>
    );
};

export default Phones;