import React from 'react'

const Footer = () => {
    return (
        <>
            <footer style={{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                textAlign: 'center',
                padding: '3px',
                backgroundColor: 'gray',
                color: 'black'
            }}>
                <p>Author: Hassan</p>
                <p><a href="mailto:hege@example.com">hege@example.com</a></p>
            </footer>
        </>
    )
}

export default Footer
