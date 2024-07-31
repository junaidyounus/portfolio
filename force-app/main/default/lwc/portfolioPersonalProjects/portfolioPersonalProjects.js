import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://hulefa-c-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://hulefa-c-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Currency Convert App",
            "img":this.CurrencyCalculator,
            "link":"https://hulefa-c-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://hulefa-c-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":""
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://hulefa-c-dev-ed.develop.my.site.com/note-taking-app"
        }
    
    ]
}

