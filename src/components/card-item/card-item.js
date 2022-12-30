import '../paper/paper.css'

const CardItem = ({props, changeColorCard}) => {
    const {id, name, price, image, yellow} = props;
    let classNames = 'card'

    if (yellow) {
        classNames += ' yellow';
    }
    return (
        <div className={classNames} 
             key={id} 
             onMouseEnter={changeColorCard}
             onMouseLeave={changeColorCard}
             data-toggle="yellow">
            <img src={image} width={160} height={160} alt="first"></img>
            <div className="card__name">{name}</div>
            <div className="card__price"><b>{price+'$'}</b></div>
        </div>
    )
}

export default CardItem;