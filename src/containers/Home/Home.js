import React from 'react';
import FormSearch from '../../components/FormSearch/FormSearch';
import Title from '../../components/Title/Title';
import ResultList from '../../components/ResultList/ResultList';
import Carousel from '../../components/HomeComponents/Carousel/Carousel';

// const API_KEY_GOOGLE = 'AIzaSyAoc_tIcnfMn5ey_Fjxm5pqTPfBcuqPPVA';
// const API_KEY_MARVEL = '6dc70d3e96ba2c968b203274f0ceab4c';

class Home extends React.Component {

	state = {
		animes: [],
		filter: null
	}
	
	handleChange = ({target: {value, name}}) => {
		this.setState({
			[name]: value
		})
	}

  handleSubmit = async (e) => {			

		e.preventDefault();
		const api_call = await fetch(`https://api.jikan.moe/search/anime?q=${this.state.filter}&page=1`);
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
				<Carousel />
        <Title/>
        <FormSearch
					onSubmit={this.handleSubmit} 
					onChange={this.handleChange}
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