import React from 'react'

export const BreadCrumb = () => {
    return (
        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-themecolor">Blank Page</h3>
            </div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">pages</li>
                    <li className="breadcrumb-item active">Blank Page</li>
                </ol>
            </div>
            {/* <div>
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
            </div> */}
        </div>
    )
}
