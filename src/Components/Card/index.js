import styles from './Card.module.css'

function Card(props){

    const {title, description, imageUrl, date} = props

    return(
        <li className={styles.card}>
            <img src={imageUrl} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default Card