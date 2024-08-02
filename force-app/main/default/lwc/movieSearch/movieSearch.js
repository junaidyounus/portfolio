import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MOVIE_CHANNEL from '@salesforce/messageChannel/movieChannel__c';

const DELAY = 300;
export default class MovieSearch extends LightningElement {
    selectedType = "";
    selectedSearch = "";
    loading = false;
    selectedPageNo = "1";
    delayTimeout;
    searchResult = [];
    selectedMovie = "";
    @wire(MessageContext)
    messageContext;
    get typeoptions() {
        return [
            { label: 'None', value: ''},
            { label: 'Movie', value: 'movie' },
            { label: 'Series', value: 'series' },
            { label: 'Episode', value: 'episode' },
        ];
    }


    handleChange(event){
        let {name,value} = event.target;
        this.loading = true;
        if(name === "type"){
            this.selectedType = value;
        }else if(name === "search"){
            this.selectedSearch = value;
        }else if(name === "pageno"){
            this.selectedPageNo = value;
        }
        // debouncing
        clearTimeout(this.delayTimeout);
        this.delyTimeout = setTimeout(()=> {
            this.searchMovie();
        }, DELAY);
        
    }
        //this method will search for the entire movie search
    async searchMovie(){
       const url = `https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=66adb5ac`;
       const res = await fetch(url);
       const data = await res.json();
       this.loading = false; 
        console.log("Movie Search Output", data);
        if (data.Response === "True") {
            this.searchResult = data.Search; 
        }
    }

    movieSelectedHandler(event){
        this.selectedMovie = event.detail;
        const payload = { movieId: this.selectedMovie };

        publish(this.messageContext, MOVIE_CHANNEL, payload);
    }
      get displaySearchResult(){
        return this.searchResult.length > 0 ? true : false;
      }
}