//importo lo stile
import style from './Card.module.css'

//importo il bottone
import Button from '../button/Button';

//creo il componente Card e gli aggiungo la props post
export default function Card({ post }) {

    //eseguo il return
    return (

        <div className={style.card}>
            <div className={`${style.cardTop} ${style.dFlex}`}>
                <p>{post.image}</p>
            </div>

            <div className={style.cardBottom}>
                <h3 className={style.mt1}>{post.title}</h3>
                <p className={style.mt1}>{post.content}</p>

                <section className={style.mt1}>{post.tags}</section>
                <Button />
            </div>
        </div>

    )
}