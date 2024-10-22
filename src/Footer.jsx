import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Todo App. This project is licensed under the MIT License.</p>
            <div className="social-links">
                <a href="https://github.com/lastnurik" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/nurgeldi-yessengeldi-125b89242/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer