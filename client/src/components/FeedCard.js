import AttemptCard from './AttemptCard'
import IntentionCard from './IntentionCard'
import TipCard from './TipCard'

function FeedCard({ item }){

    let content
    if(item.type === 'attempt') content = <AttemptCard item={item} />
    if(item.type === 'tip') content = <TipCard item={item}/>
    if(item.type === 'intention') content = <IntentionCard item={item}/>

    return(
        <div>{content}</div>
    )
}

export default FeedCard;