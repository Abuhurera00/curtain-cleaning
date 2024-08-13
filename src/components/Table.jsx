
import React from 'react';
import "../Styles/Pricing.css";

const Table = () => {
    const tableData = [
        { day: "Day", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "3 DAYS" },
        { day: "Caffon", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "3 DAYS" },
        { day: "Net", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "3 DAYS" },
        { day: "Cotton ", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "3 DAYS" },
        { day: "Night", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "5 DAYS" },
        { day: "Black-out", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "5 DAYS" },
        { day: "Blockout", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "5 DAYS" },
        { day: "Fancy", company: "Curtain Cleaning", contact: "10 AED/Sq.meter", country: "5 DAYS" },
        // { drapery: "Drapery Cleaning", sq: "18 AED/Sq.meter", onsite: "On Site" }
    ];


    const secTableData = [
        { company: "Roller Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" },
        { company: "Roman Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" },
        { company: "Illusion Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" },
        { company: "Vertical Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" },
        { company: "Panel Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" },
        { company: "Electrical Blinds Cleaning", contact: "15 AED/Sq.meter", country: "On Site/Laundry" }
    ];

    return (
        <div className="table-width">
            <div className="table-center">
                <table>
                    <thead>
                        <tr>
                            <th>Types of Curtains</th>
                            <th>Dry Cleaning</th>
                            <th>Days of Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td><span className='before'>{row.day}</span> {row.company}</td>
                                <td>{row.contact}</td>
                                <td>{row.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





            <div className='table-heading-cont'>
                <h4 className='table-heading'>DRAPERY CLEANING PRICE</h4>
            </div>

            <div className="table-center">
                <table>
                    <tbody>
                        {/* {tableData.map((row, index) => ( */}
                        <tr>
                            <td>Drapery Cleaning</td>
                            <td>18 AED/Sq.meter</td>
                            <td>On Site</td>
                        </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>


            <div className='table-heading-cont'>
                <h4 className='table-heading'>BLINDS CLEANING PRICE</h4>
            </div>
            <div className="table-center">
                <table>
                    <tbody>
                        {secTableData.map((sec, index) => (
                            <tr key={index}>
                                <td>{sec.company}</td>
                                <td>{sec.contact}</td>
                                <td>{sec.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <div className='table-heading-cont'>
                <h4 className='table-heading'>Curtain steam pressing PRICE</h4>
            </div>
            <div className="table-center">
                <table>
                    <tbody>
                            <tr>
                                <td>Curtain Steam Pressing</td>
                                <td>10 AED/Sq.meter</td>
                                <td>Schedule Visit</td>
                            </tr>
                    </tbody>
                </table>
            </div>


            <div className='table-heading-cont'>
                <h4 className='table-heading'>Curtain steam pressing PRICE</h4>
            </div>
            <div className="table-center">
                <table>
                    <tbody>
                            <tr>
                                <td>Curtain Alteration</td>
                                <td>10 AED/meter</td>
                                <td>02 DAYS</td>
                            </tr>
                            <tr>
                                <td>Curtain Strip Replacement</td>
                                <td>12 AED/meter</td>
                                <td>03 DAYS</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
