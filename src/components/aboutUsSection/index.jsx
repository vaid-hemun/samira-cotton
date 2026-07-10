import React from 'react'
import { Factory, Truck, Briefcase, ShieldCheck , UserCheck} from 'lucide-react';
import './index.css'

const AboutUs = () => {
    return (
    <section className="py-5 about-us-section" id='about'>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold who-text heading-dark">Who We Are</h2>
          <p className="text-muted heading-light">
            An integrated healthcare ecosystem combining manufacturing strength
            with nationwide distribution expertise.
          </p>
        </div>

        {/* Value Line */}
        <div className="text-center mb-5">
          <span className="badge px-4 py-2 fs-6 shadow-sm">
            From Factory Floor to Healthcare Frontlines
          </span>
        </div>

        {/* Timeline */}
        <div className="row g-4">
          {/* Company A */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-center mb-3">
                <Factory className="text-success me-2" />
                <h5 className="fw-bold mb-0 text-success">Samira Cotton Udyog· Manufacturing</h5>
              </div>
              <p className="text-muted-desc font-manrope heading-light">
                Our in-house manufacturing arm focuses on design, development,
                and production of healthcare and hygiene products under strict
                quality control systems.
              </p>
              <ul className="list-unstyled small font-manrope">
                <li className='font-manrope heading-light'> Modern in-house production facilities</li>
                <li className='font-manrope heading-light'> Private labeling & OEM manufacturing</li>
                <li className='font-manrope heading-light'>Regulatory compliance & quality assurance</li>
                <li className='font-manrope heading-light'> Custom product development</li>
              </ul>
              <p className="small text-muted-green mb-0 font-manrope">
                <ShieldCheck size={14} className="me-1" /> Trusted by
                institutional buyers and OEM partners
              </p>
            </div>
          </div>

          {/* Company B */}
          <div className="col-12 col-md-6">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="d-flex align-items-center mb-3">
                <Truck className="text-success me-2" />
                <h5 className="fw-bold mb-0 text-success">Suswasthya International Pvt. Ltd· Trading & Distribution</h5>
              </div>
              <p className="text-muted-desc font-manrope heading-light">
                Manages nationwide trading, marketing, and distribution, ensuring products reach hospitals, clinics, distributors, and retailers efficiently with reliable logistics, strong partnerships, and timely delivery.
              </p>
              <ul className="list-unstyled small font-manrope">
                <li className='font-manrope heading-light'> Pan-Nepal distribution network</li>
                <li className='font-manrope heading-light'> Institutional & bulk supply</li>
                <li className='font-manrope heading-light'> Authorized seller for multiple brands</li>
                <li className='font-manrope heading-light'> End-to-end sales, billing & logistics</li>
              </ul>
              <p className="small text-muted-green mb-0 font-manrope">
                <Briefcase size={14} className="me-1" /> Preferred partner for
                hospitals, distributors & retailers
              </p>
            </div>
          </div>
        </div>

        {/* Investor vs Customer Copy */}
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="d-flex align-items-center mb-1">
              <h6 className="fw-bold" style={{color:'#1C4D8D'}}>For Customers</h6>
              </div>
              <p className="text-muted small mb-0 font-manrope">
                Reliable products, consistent supply, competitive pricing, and
                a partner you can trust for long-term healthcare needs.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white shadow-sm rounded">
              <div className="d-flex align-items-center mb-1">
              <h6 className="fw-bold" style={{color:'#1C4D8D'}}>For Investors & Partners</h6>
              </div>
              <p className="text-muted small mb-0 font-manrope">
                Vertically integrated operations, scalable manufacturing,
                diversified distribution channels, and strong institutional
                demand across Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default AboutUs
