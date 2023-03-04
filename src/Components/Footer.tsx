import '../styles/footer.scss'

const year = new Date().getFullYear();

function Footer() {

return (
        <footer className="footer">
            ©{year} - Matěj Kunc 👨‍💻 | design & development
        </footer>
	)
}

export default Footer
