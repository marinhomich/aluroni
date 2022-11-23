import styles from './Item.module.scss'
import classNames from "classnames";

interface Props {
    title: string,
    description: string
    photo: string,
    size: number,
    serving: number,
    price: number,
    id: number,
    category: {
        id: number,
        label: string
    }
}

export default function Item({title, photo, description, category, size, serving, price }: Props) {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {serving} Pessoa{serving === 1 ? "" : "s"}
                    </div>
                    <div className={styles.item__valor}>
                        R${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
