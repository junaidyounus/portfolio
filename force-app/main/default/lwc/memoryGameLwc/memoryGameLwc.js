import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false
    openedCards = []
    // for counts the moves
    moves = 0
    // add matchedCards in this array
    matchedCards = []
    cards=[
        {id:1, listClass:"card",type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card",type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card",type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card",type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card",type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card",type:'leaf', icon:'fa fa-leaf'},
        {id:7, listClass:"card",type:'bomb', icon:'fa fa-bomb'},
        {id:8, listClass:"card",type:'diamond', icon:'fa fa-diamond'},
        {id:9, listClass:"card",type:'bicycle', icon:'fa fa-bicycle'},
        {id:10, listClass:"card",type:'bicycle', icon:'fa fa-bicycle'},
        {id:11, listClass:"card",type:'bomb', icon:'fa fa-bomb'},
        {id:12, listClass:"card",type:'cube', icon:'fa fa-cube'},
        {id:13, listClass:"card",type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card",type:'anchor', icon:'fa fa-anchor'},
        {id:15, listClass:"card",type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card",type:'leaf', icon:'fa fa-leaf'}
    ]
 
    displayCard(event){
        let currCard = event.target
        currCard.classList.add("open","show","disabled")
        // Pushing open cards into array of openedCards
        this.openedCards = this.openedCards.concat(event.target)
        // check the lenght of card in array, this is array we can easly check lenght as well
        const len = this.openedCards.length
        if(len === 2){
            // moves are increamenting
            this.moves = this.moves+1
            // check both cards are macthed
            if(this.openedCards[0].type === this.openedCards[1].type){
                // contain match cards into array
                this.matchedCards = this.matchedCards.concat(this.openedCards[0], this.openedCards[1])
                this.matched()
            }else{
                this.unmatched()
            }
        }
    }

    matched(){
        // if cards match remove the show and open classes and add match and disabled classes
        this.openedCards[0].classList.add("match", "disabled")
        this.openedCards[1].classList.add("match", "disabled")
        this.openedCards[0].classList.remove("open", "show")
        this.openedCards[0].classList.remove("open", "show")
        // again opened cards would be empty
        this.openedCards=[]
    }

    unmatched(){
        this.openedCards[0].classList.add("unmatched")
        this.openedCards[1].classList.add("unmatched")
        this.action('DISABLE')

        setTimeout(()=>{
            this.openedCards[0].classList.remove("open", "show", "unmatched")
            this.openedCards[1].classList.remove("open", "show", "unmatched")
            this.action('ENABLE')
            this.openedCards=[]
        },1100)
    }

    action(action){
        let cards = this.template.querySelector('.card')
        Array.from(cards).forEach(item=>{
            if(action === 'ENABLE'){
                let isMatch = item.classList.contains('match')
                if(isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled')
            }
        })
    }

    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
        // loadStyle is the promise call it will return promise
        loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
            console.log('Font loaded')
        }).catch(error => {
            console.log(error);
        })

        this.isLibLoaded = true

        }

    }
}