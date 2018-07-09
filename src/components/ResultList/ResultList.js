import React from "react";
import './index.css';


// .filter(
// 	(anime) => {
// 		return anime.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
// 	}
// );

class ResultList extends React.Component {

	render() {
		let filteredResult = this.props.locals.filter(
			(local) => {
				return local.nome.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
			}
		);
		return(
		<div className="container">
			<table className="table table-striped table-dark">
				<thead className="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nome</th>
						<th scope="col">Rua</th>
						<th scope="col">Numero</th>
					</tr>
				</thead>
				{filteredResult.map(local =>  
				<tbody key={local.id}>
					<tr>
						<th scope="row">{local.id}</th>
						<td><a href="" className="">{local.nome}</a></td>
						<td>{local.rua}</td>
						<td>{local.numero}</td>
					</tr>
				</tbody>
			)}
			</table>
		</div>
		)

	}
}

export default ResultList;