import '../styles/modal.scss'
import { Link } from "react-router-dom";

interface ReportModalProps {
	modalVisibility:string
	modalTitle:string
}

function ReportModal({modalVisibility, modalTitle}: ReportModalProps) {

const closeModal = () => {
	//
}

return (
    <div className={"modal " + modalVisibility}>
        <div className="modal__header">
            <div className="modal__title">{modalTitle}</div>
            <Link to="">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_348_124)">
					<path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="#3369E6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M7.5 3.75V7.5L10 8.75" stroke="#3369E6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
					</g>
				</svg> 
				Historie závad
            </Link>
            <button className="modal__close" onClick={() => closeModal()}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="close-bg" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
					<path className="close-cross" d="M15 9L9 15" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
					<path className="close-cross" d="M9 9L15 15" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
            </button>
        </div>
        
        <div className="modal__content">
            <form className="form">
                <div className="form__wrapper">
					<div className="form__group">
						<label>Jméno pracovníka <small>*</small></label>
						<input type="text" required/>
					</div>

					<div className="form__group">
						<label>Číslo pracovníka <small>*</small></label>
						<input type="text" required/>
					</div>
                </div>
                
                <div className="form__group">
                    <label>Popis závady <small>*</small></label>
                    <textarea required/>
                </div>
                
                <div className="form__wrapper">
					<div className="form__group">
						<label>Čas začátku <small>*</small></label>
						<input type="time" required/>
					</div>

					<div className="form__group">
						<label>Číslo konce <small>*</small></label>
						<input type="time" required/>
					</div>
                </div>
                <small><small>*</small>Povinné údaje</small>
                <input type="submit" value="Uložit a nahrát" />
            </form>
        </div>
    </div>
	)
}

export default ReportModal
