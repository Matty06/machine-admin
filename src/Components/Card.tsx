import '../styles/card.scss'

interface CardProps {
	machineName:string
}

function Card({machineName}:CardProps) {

return (
        <div className="card">
            <h1 className="card__title">{machineName}</h1>
        </div>
	)
}

export default Card
