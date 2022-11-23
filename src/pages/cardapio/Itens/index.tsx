import itens from './itens.json'
import Item from './Item'
import styles from './Itens.module.scss'

export default function Itens(){
    return (
        <div className={styles.itens}>
            {itens.map((item) => (
                <Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    size={item.size}
                    serving={item.serving}
                    price={item.price}
                    category={item.category}
                    id={item.id}

                />
            ))}

        </div>
    )
}
