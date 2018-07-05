import React from 'react';
import InputSearch from '../../components/InputSearch/InputSearch';
import Title from '../../components/Title/Title';
import ResultList from '../../components/ResultList/ResultList';

// const API_KEY_GOOGLE = 'AIzaSyAoc_tIcnfMn5ey_Fjxm5pqTPfBcuqPPVA';
// const API_KEY_MARVEL = '6dc70d3e96ba2c968b203274f0ceab4c';

class Home extends React.Component {

	state = {
		animes: [],
		filter: null
  }

  getInfo = async (e) => {
		const filter = e.target.elements.filter.value;
			
		e.preventDefault();
		const api_call = await fetch(`https://api.jikan.moe/search/anime?q=${filter}&page=1`);
		// const api_call = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${filter}&inputtype=textquery&fields=photos,formatted_address,filter,rating,opening_hours,geometry&key=${API_KEY}`);
		const data = await api_call.json();
					console.log(data.result);
					const animes = data.result;
  	  this.setState({
				animes
			});
  }

  render(){
    return (
      <div>
        <Title/>
        <InputSearch
					getInfo={this.getInfo} 
        	fieldPlaceholder="filter for events, countries, cities..." 
					title="filter"					
					/>  
					<ResultList
						{...this.state}
					 />

      </div>
    )
  }       
}

export default Home;