import '../styles/modal.scss'
import { Link } from "react-router-dom";
import { useRef } from 'react';

interface ReportModalProps {
	modalVisibility:string
	modalTitle:string
}

function ReportModal({modalVisibility, modalTitle}: ReportModalProps) {

const staffNameRef = useRef<HTMLInputElement>(null);
const idStaffRef = useRef<HTMLInputElement>(null);
const descriptionRef = useRef<HTMLTextAreaElement>(null);
const startTimeRef = useRef<HTMLInputElement>(null);
const endTimeRef = useRef<HTMLInputElement>(null);

const closeModal = () => {
	//
}

const sendData = (event:any) => {
	event.preventDefault();
	
	const bodyData = {
		staffName: staffNameRef.current?.value,
		idStaff: idStaffRef.current?.value,
		description: descriptionRef.current?.value,
		startTime:  startTimeRef.current?.value,
		endTime: endTimeRef.current?.value
	};
	
	fetch('https://63f4b8472213ed989c48f180.mockapi.io/machines', {
		method: 'POST',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(bodyData),
		cache: 'default'
		}).then(response => {
			return response.json();
		}).then(data => console.log(data))
		.catch(error => console.log(error));
		
}

return (
	<div className={"modal-dialog js-modal-dialog " + modalVisibility}>
		<div className="modal">
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
				<form id="form" className="form" onSubmit={() => sendData(event)}>
					<div className="form__wrapper">
						<div className="form__group">
							<label>Jméno pracovníka <small>*</small></label>
							<input type="text" ref={staffNameRef} required/>
						</div>
	
						<div className="form__group">
							<label>Číslo pracovníka <small>*</small></label>
							<input type="text" ref={idStaffRef} required/>
						</div>
					</div>
					
					<div className="form__group">
						<label>Popis závady <small>*</small></label>
						<textarea required ref={descriptionRef}/>
					</div>
					
					<div className="form__wrapper">
						<div className="form__group">
							<label>Čas začátku <small>*</small></label>
							<input type="time" ref={startTimeRef} required/>
						</div>
	
						<div className="form__group">
							<label>Číslo konce <small>*</small></label>
							<input type="time" ref={endTimeRef} required/>
						</div>
					</div>
					<small><small>*</small>Povinné údaje</small>
					<input type="submit" value="Uložit a nahrát" />
				</form>
			</div>
			
			<div className="modal__content modal__content--success">
				<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M64.1668 32.3169V35.0003C64.1633 41.2898 62.1266 47.4097 58.3607 52.4472C54.5948 57.4848 49.3014 61.17 43.27 62.9533C37.2385 64.7366 30.7922 64.5225 24.8924 62.3428C18.9926 60.1631 13.9554 56.1347 10.5321 50.8584C7.10886 45.582 5.48289 39.3404 5.89672 33.0645C6.31055 26.7886 8.74202 20.8145 12.8285 16.0334C16.9149 11.2522 22.4375 7.92012 28.5724 6.53401C34.7073 5.14791 41.1259 5.78207 46.871 8.34192" stroke="#47D08D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M64.1667 11.6666L35 40.8625L26.25 32.1125" stroke="#47D08D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<div className="modal__heading">Oprava závady byla uložena.</div>
			</div>
			
			<div className="modal__content modal__content--error">
				<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M30.0127 11.2582L5.30858 52.4999C4.79923 53.3819 4.52973 54.382 4.52688 55.4005C4.52403 56.4191 4.78793 57.4207 5.29232 58.3056C5.79672 59.1905 6.52403 59.9279 7.40189 60.4444C8.27976 60.961 9.27758 61.2387 10.2961 61.2499H59.7044C60.7229 61.2387 61.7207 60.961 62.5986 60.4444C63.4765 59.9279 64.2038 59.1905 64.7082 58.3056C65.2126 57.4207 65.4765 56.4191 65.4736 55.4005C65.4708 54.382 65.2013 53.3819 64.6919 52.4999L39.9877 11.2582C39.4678 10.401 38.7357 9.6923 37.8621 9.20044C36.9884 8.70859 36.0028 8.4502 35.0002 8.4502C33.9977 8.4502 33.012 8.70859 32.1384 9.20044C31.2648 9.6923 30.5327 10.401 30.0127 11.2582Z" stroke="#D04F47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M35 26.25V37.9167" stroke="#D04F47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M35 49.5834H35.0292" stroke="#D04F47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<div className="modal__heading">Oprava závady nebyla uložena.</div>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Phasellus rhoncus.
				</p>
			</div>
		</div>
	</div>
	)
}

export default ReportModal
