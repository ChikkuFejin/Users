import React from 'react'

export default function layout({
    children,
    className
}) {
    return (
        <div className={className&&className||"container mt-3"}>
            {children}
        </div>
    )
}
