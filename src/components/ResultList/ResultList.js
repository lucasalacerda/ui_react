import React from "react";
import './index.css'

const ResultList = ({ animes }) => (
	<div className="container">
		<table className="table table-striped table-dark">
			<thead className="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Type</th>
					<th scope="col">Episodes</th>
				</tr>
			</thead>
	{animes.map(anime =>  
			<tbody key={anime.mal_id}>
				<tr>
					<th scope="row">{anime.mal_id}</th>
					<td><a href="" className="">{anime.title}</a></td>
					<td>{anime.type}</td>
					<td>{anime.episodes}</td>
				</tr>
			</tbody>
		)}
		</table>
		</div>
)

export default ResultList;