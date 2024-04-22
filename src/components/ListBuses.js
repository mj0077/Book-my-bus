import React from 'react';
import Bus from './Bus';

const ListBuses = () => {

    let busesToShow = [
        {
            "name": 'bus1',
            "from": "Delhi",
            "fare": "1509.00",
            "busType": "Scania A/C Multi Axle Seater (2+2)",
            "availableSeats": 42
        },
        {
            "name": 'bus2',
            "from": "Shimla",
            "fare": "799.00",
            "busType": "Volvo A/C Multi Axle Seater (2+2)",
            "availableSeats": 34
        },
        {
            "name": 'bus3',
            "from": "China",
            "fare": "1399.00",
            "busType": "Benz A/C Multi Axle Seater (2+2)",
            "availableSeats": 18
        }
    ];

    const renderBuses = () => {
        return busesToShow.map((bus, idx) => {
            return <Bus bus={bus} key={idx} />
            // console.table(bus);
        })
    }

    return (
        <div>
            {renderBuses()}
        </div>
    );
};

export default ListBuses;