import React from 'react'
import './Scheme.css';
import { schemeData } from '../../data';

const Scheme = (props) => {
    return (
        <>
        {
            props.data.map((scheme) => {
                const { id, schemeName, schemeTotal, buttonName, registrationLink } = scheme;
                console.log(scheme.id);
                return (
                    <div key={id} className="scheme">
                        <div className="scheme-name">
                            <h4>{schemeName}</h4>
                        </div>
                        <div className="scheme-data">
                            <p className="scheme-total">{schemeTotal}</p>
                            {/* <button>{buttonName}</button> */}
                            <a type="button" className="registerButton" href={registrationLink}>{buttonName}</a>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Scheme
