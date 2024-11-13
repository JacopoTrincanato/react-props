//importo lo stile
import style from './Card.module.css'

//importo il bottone
import Button from '../button/Button';

//creo il componente Card
export default function Card() {
    //creo una variabile per il testo che indica la dimensione della card
    const cardSize = '600x400';

    //creo una variabile per il titolo della card
    const cardTitle = 'Titolo del post';

    //creo una variabile per la descrizione della card
    const cardDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum magnam autem consectetur pariatur reiciendis a, vero voluptate ad modi earum et nisi quia possimus, numquam adipisci magni delectus quasi ab.';

    //eseguo il return
    return (

        <div className={style.card}>
            <div className={`${style.cardTop} ${style.dFlex}`}>
                <p>{cardSize}</p>
            </div>

            <div className={style.cardBottom}>
                <h3 className={style.mt1}>{cardTitle}</h3>
                <p className={style.mt1}>{cardDescription}</p>
                <Button />
            </div>
        </div>

    )
}