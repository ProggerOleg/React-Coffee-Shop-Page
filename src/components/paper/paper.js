import CardItem from '../card-item/card-item'
import './paper.css'

const PaperBlock = ({data, changeColorCard})=> {
    
    const elements = data.map(item=>{
        const {id, ...props} = item;
        return (
            <CardItem
                key={id}
                props = {props}
                changeColorCard={(e) => changeColorCard(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <div className="paper__block">
            <div className='cards flex'>
                {elements}
            </div>
        </div>
    )
}
    

export default PaperBlock;