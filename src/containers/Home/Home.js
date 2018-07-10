import React from 'react';
import Title from '../../components/Title/Title';
import ResultList from '../../components/ResultList/ResultList';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';

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
	
	componentDidMount = async () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Accept", "application/json");

		this.setState({
			loading: true
		});
		const api_call = await fetch(`http://localhost:8081/EventsCentral/api/local`, {
			method: 'GET',
			headers: myHeaders,
			mode: 'cors',
			});
		const data = await api_call.json();
		const locals = data;
		console.log(locals)
		if(data.result !== ''){
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
        <Title title="Events"/>
				<Input onChange={this.handleChange} type="text" name="filter" fieldPlaceholder="filter for events, countries, cities..."/>
				{result}
      </div>
    )
  }       
}

export default Home;