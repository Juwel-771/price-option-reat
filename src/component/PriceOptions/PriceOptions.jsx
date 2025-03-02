import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    
  const PriceOptions = [
    {
      "id": 1,
      "plan": "Basic",
      "price": 30,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room facilities",
        "1 group fitness class per week",
        "Free water dispenser",
        "Open gym hours only"
      ]
    },
    {
      "id": 2,
      "plan": "Standard",
      "price": 50,
      "currency": "USD",
      "features": [
        "All Basic Plan features",
        "Unlimited group fitness classes",
        "1 personal training session per month",
        "Access to yoga and meditation sessions",
        "Discount on merchandise"
      ]
    },
    {
      "id": 3,
      "plan": "Premium",
      "price": 80,
      "currency": "USD",
      "features": [
        "All Standard Plan features",
        "Unlimited personal training sessions",
        "Nutrition and diet consultation",
        "Priority booking for classes",
        "Sauna and relaxation zone access",
        "Free gym merchandise kit",
        "Access to advanced training equipment"
      ]
    },
    {
      "id": 4,
      "plan": "Family",
      "price": 120,
      "currency": "USD",
      "features": [
        "Includes 2 adults + 2 children",
        "Access to all facilities and classes",
        "Family-friendly fitness programs",
        "Childcare during workout sessions",
        "Weekend family fitness events",
        "Access to the swimming pool"
      ]
    },
    {
      "id": 5,
      "plan": "Corporate",
      "price": 200,
      "currency": "USD",
      "features": [
        "Access for up to 10 employees",
        "Customizable group fitness sessions",
        "Team building fitness challenges",
        "On-site wellness seminars",
        "Corporate discount on personal training",
        "Flexible billing options"
      ]
    },
    {
      "id": 6,
      "plan": "VIP",
      "price": 150,
      "currency": "USD",
      "features": [
        "All Premium Plan features",
        "Personal locker with premium amenities",
        "Complimentary spa services",
        "Exclusive access to VIP lounge",
        "Dedicated personal trainer",
        "Free monthly health check-ups",
        "Priority access to new programs"
      ]
    },
    {
      "id": 7,
      "plan": "Student",
      "price": 25,
      "currency": "USD",
      "features": [
        "Discounted membership for students",
        "Access to gym equipment",
        "Participation in youth fitness programs",
        "Study-friendly lounge area",
        "Special fitness workshops for students"
      ]
    },
    {
      "id": 8,
      "plan": "Senior",
      "price": 40,
      "currency": "USD",
      "features": [
        "Designed for seniors 60+",
        "Access to low-impact fitness classes",
        "Specialized fitness support",
        "Access to relaxation and therapy sessions",
        "Discounts on health check-ups"
      ]
    },
    {
      "id": 9,
      "plan": "Day Pass",
      "price": 10,
      "currency": "USD",
      "features": [
        "One-day access to all gym facilities",
        "Participation in scheduled fitness classes",
        "Locker room access",
        "No membership commitment",
        "Perfect for short-term visitors"
      ]
    },
    {
      "id": 10,
      "plan": "Seasonal",
      "price": 60,
      "currency": "USD",
      "features": [
        "3-month seasonal access",
        "Access to all fitness classes",
        "Special seasonal fitness challenges",
        "Guest pass for friends",
        "Discounts on summer/winter bootcamps"
      ]
    }
  ];
      
    return (
        <div>
            <h2 className='text-2xl text-teal-800'>Best Price Option in Town</h2>
            <div className='grid md:grid-cols-3 gap-3 m-5'>
              {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;