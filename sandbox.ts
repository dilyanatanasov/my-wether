import fetch from "node-fetch";

class WetherManager { 
    public async getWether(city: string): Promise<any> {
        try {
            const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=5b2911a72813b185bdf48035bb5444d8`)
            const response = await result.json();
            console.log(response)
        } catch(e) {
            console.log(`Error: ${JSON.stringify(e)}`);
        }
    }
}

(async () => {
    const wetherInLondon = await new WetherManager().getWether("Varna");
    console.log(wetherInLondon);
})();



