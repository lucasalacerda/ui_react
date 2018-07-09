import React from 'react';
// import FormSearch from '../../components/FormSearch/FormSearch';
import Title from '../../components/Title/Title';
import ResultList from '../../components/ResultList/ResultList';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
// import Carousel from '../../components/HomeComponents/Carousel/Carousel';

// const API_KEY_GOOGLE = 'AIzaSyAoc_tIcnfMn5ey_Fjxm5pqTPfBcuqPPVA';
// const API_KEY_MARVEL = '6dc70d3e96ba2c968b203274f0ceab4c';

class Home extends React.Component {

	state = {
		locals: [],
		filter: '',
		loading: false
	}
	
	handleChange = ({target: {value, name}}) => {
		this.setState({
			[name]: value
		})
		console.log(value)
	}

  handleSubmit = async (e) => {			

		e.preventDefault();
		const api_call = await fetch(`https://api.jikan.moe/search/anime?q=${this.state.filter}&page=1`);
		const data = await api_call.json();
					const locals = data.result;
  	  this.setState({
				locals
			});
	}
	
	componentDidMount = async () => {

		this.setState({
			loading: true
		});
		const api_call = await fetch(`http://localhost:8080/EventsCentral/api/local/`);
		// const api_call = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${filter}&inputtype=textquery&fields=photos,formatted_address,filter,rating,opening_hours,geometry&key=${API_KEY}`);
		const data = await api_call;
		const locals = data.result;
		console.log(locals)
		if(data.result !== undefined){
			this.setState({
				locals,
				loading: false
			});
		}
	}

  render(){

		let filteredResult = this.state.locals
		let result;
		if (this.state.loading) {
			result = <Loading type="spin" color="#0099cc"/>
		}
		else{
			result = 	<ResultList
				locals={filteredResult}
				search={this.state.filter}
		 />
		}
    return (
      <div>
        <Title/>
				<Input onChange={this.handleChange} type="text" name="filter" fieldPlaceholder="filter for events, countries, cities..."/>
        {/* <FormSearch
					onSubmit={this.handleSubmit} 
					onChange={this.handleChange}
        	fieldPlaceholder="filter for events, countries, cities..." 
					title="filter"					
					/>   */}
				{result}
      </div>
    )
  }       
}

export default Home;