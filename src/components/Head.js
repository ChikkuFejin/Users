import React from 'react'

function Head({
    button,
    title
}) {
    return (
        <div className="row">
            {/* {console.log("actionButton")} */}
            <div className="col-12 col-md-6">
                <h3>{title||"Title"}</h3>
            </div>
            <div className="col-12 col-md-6 align-right">
                {button}
            </div>
        </div>
    )
}

export default Head
