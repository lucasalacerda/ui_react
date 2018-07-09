import React from 'react';
import './index.css';

const Input = (props) => (
	<div className="container text-center">
		<div className="row">
				<div className="col">
					<input onChange={props.onChange} 
					type={props.type}
					name={props.name} 
					className="form-control border-dark rounded-0" 
					placeholder={props.fieldPlaceholder} {...this.props}/>
				</div>
			</div>
	</div>
)
export default Input;
