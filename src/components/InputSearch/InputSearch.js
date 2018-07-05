import React from 'react';
// import { Button } from "../Button/Button";
import './index.css';

const InputSearch = ({ getInfo, fieldPlaceholder}) => (
	<div className="container form-style-8 text-center">
		<div className="row">
			<div className="col">
	<form onSubmit={getInfo}>
		<input type="text" name="filter" className="form-control border-dark rounded-0" placeholder={fieldPlaceholder}/>
		<button>Search</button>
	</form>
			</div>
		</div>
	</div>
)

export default InputSearch;

