import React from 'react'

export default function About(){
  return (
    <div className="container my-5">
    <div className="accordion" id="accordionExample">
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Vision Scope
          </button>
        </h5>
      </div>
  
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body">
          The Dental Service Application is a Business to Client Interactive System that will provide a single point of access to the patients and the dentist. The main purpose of the system is to store the data of patient accounts, the dentist’s portfolio, patient reviews, allow patients to book appointments and align them to the dentist’s schedule and display the services and their information. The application will increase the outreach of the dentist by 95 percent. Unlike the current manual processes, our system will generate all reports required to comply with federal and state government regulations that require the reporting of licensed dental clinic and handling of patient information and privacy.
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
