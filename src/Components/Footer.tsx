import '../styles/footer.scss'

const year = new Date().getFullYear();

function Footer() {

return (
        <footer className="footer">
            ©{year} - Matěj Kunc
        </footer>
	)
}

export default Footer
