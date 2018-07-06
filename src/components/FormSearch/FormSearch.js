import React from 'react';
// import { Button } from "../Button/Button";
import './index.css';
import Input from '../Input/Input'
import Button from '../Button/Button';

const FormSearch = ({ onSubmit, onChange, fieldPlaceholder}) => (
	<div className="container form-style-8 text-center">
		<div className="row">
			<div className="col">
				<form onSubmit={onSubmit}>
					<Input onChange={onChange} type="text" name="filter" fieldPlaceholder={fieldPlaceholder}/>
					<Button title="Search"/>
				</form>
			</div>
		</div>
	</div>
)

export default FormSearch;

