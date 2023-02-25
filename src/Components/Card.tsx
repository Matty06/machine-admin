import '../styles/card.scss'

function Card(machineName:any) {

return (
        <div className="card">
            <h1 className="card__title">{machineName}</h1>
        </div>
	)
}

export default Card
