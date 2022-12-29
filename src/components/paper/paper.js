import './paper.css'

const PaperBlock = () => {
    return (
        <div className="paper__block">
            <div className='cards flex'>
            <div className="card">
                <img src='coffee example.png' width={160} height={160} alt="first"></img>
                <div className="card__name">Solimo Coffee Beans 2 kg</div>
                <div className="card__price"><b>10.73$</b></div>
            </div>
            <div className="card">
                <img src='coffee ex2.png' width={160} height={160} alt="second"></img>
                <div className="card__name">Presto Coffee Beans 1 kg</div>
                <div className="card__price"><b>15.99$</b></div>
            </div>
            <div className="card">
                <img src='coffee ex3.png' width={160} height={160} alt="third"></img>
                <div className="card__name">AROMISTICO Coffee 1 kg</div>
                <div className="card__price"><b>6.99$</b></div>
            </div>
            </div>
        </div>
    )
}

export default PaperBlock;