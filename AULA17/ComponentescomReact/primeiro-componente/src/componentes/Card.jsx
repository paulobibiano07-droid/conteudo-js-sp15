function Card({ titulo, desc, preco }) {
    


    return(
        <div>
            <h2>{titulo}</h2>
            <p>{desc}</p>
            <strong>{preco}</strong>
        </div>
    );
}

export default Card;