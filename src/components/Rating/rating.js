import React from 'react'
import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";


class Rating extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedOption1: '1',
            selectedOption2: '1',
            selectedOption3: '1',
            comment: '',
            icoName: ''
        }
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleConceptChange = this.handleConceptChange.bind(this);
        this.handleWhiteChange = this.handleWhiteChange.bind(this);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        


    }

     
    handleTeamChange (changeEvent) {
        this.setState({
        selectedOption1: changeEvent.target.value
        });
    }

    handleConceptChange (changeEvent) {
        this.setState({
        selectedOption2: changeEvent.target.value
        });
    }

    handleWhiteChange (changeEvent) {
        this.setState({
        selectedOption3: changeEvent.target.value
        });
    }

    handleCommentChange(changeEvent) {
        this.setState({ 
        comment : changeEvent.target.value });
        }

    handleFormSubmit (ev) {
        ev.preventDefault();
        let rateICo = this.props.rateIcoName
        console.log('rate', rateICo)
        let rating = {
            comment : this.state.comment,
            Team: this.state.selectedOption1,
            Concept: this.state.selectedOption2,
            Whitepaper: this.state.selectedOption3,
            icoName: rateICo

        }
        console.log("rating info", rating);

        this.props.sendingData(rating);
       
        console.log('You have selected:', this.state.selectedOption1);
        console.log('You have selected:', this.state.selectedOption2);
        console.log('You have selected:', this.state.selectedOption3);
    }

    render(){
        // let rateICo = this.props.rateIcoName
        // console.log('rateico', rateICo)
        return(                  
                <div class="form-group" >
                    <h4>Team</h4>
                    <form onSubmit={this.handleFormSubmit} > 
                        <label class="radio-inline">
                            <input type="radio" value="1"  checked={this.state.selectedOption1 === '1'}  onChange={this.handleTeamChange} />  1
                        </label>
                        <label class="radio-inline">
                        <input type="radio" value="2"  checked={this.state.selectedOption1 === '2'} onChange={this.handleTeamChange} /> 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="3" checked={this.state.selectedOption1 === '3'} onChange={this.handleTeamChange} />  3
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="4" checked={this.state.selectedOption1 === '4'} onChange={this.handleTeamChange} />  4
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="5" checked={this.state.selectedOption1 === '5'} onChange={this.handleTeamChange} />  5
                        </label>
                
                    <h4>Concept</h4>
                    
                    <label class="radio-inline">
                            <input type="radio" value="1"  checked={this.state.selectedOption2 === '1'}  onChange={this.handleConceptChange} />  1
                        </label>
                        <label class="radio-inline">
                        <input type="radio" value="2"  checked={this.state.selectedOption2 === '2'} onChange={this.handleConceptChange} /> 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="3" checked={this.state.selectedOption2 === '3'} onChange={this.handleConceptChange} />  3
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="4" checked={this.state.selectedOption2 === '4'} onChange={this.handleConceptChange} />  4
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="5" checked={this.state.selectedOption2 === '5'} onChange={this.handleConceptChange} />  5
                        </label>
                

                    <h4>Whitepaper</h4>
                    
                        <label class="radio-inline">
                            <input type="radio" value="1"  checked={this.state.selectedOption3 === '1'}  onChange={this.handleWhiteChange} />  1
                        </label>
                        <label class="radio-inline">
                        <input type="radio" value="2"  checked={this.state.selectedOption3 === '2'} onChange={this.handleWhiteChange} /> 2
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="3" checked={this.state.selectedOption3 === '3'} onChange={this.handleWhiteChange} />  3
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="4" checked={this.state.selectedOption3 === '4'} onChange={this.handleWhiteChange} />  4
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="5" checked={this.state.selectedOption3 === '5'} onChange={this.handleWhiteChange} />  5
                        </label>

                        <h4>Comment</h4>
                        <textarea class="form-control" rows="5" id="comment" onChange={this.handleCommentChange}  value={this.state.comment} required></textarea>
                        <button  style={{marginTop: '10px'}} type="submit" class="btn btn-primary">Submit</button>

                    </form>
                </div>
        );
    }
}




  
function mapDispatchToProps(dispatch) {
    return {
        sendingData: rate => {
            dispatch(MiddleWare.SendRating(rate));
            },
        }
    };
   
export default connect(null,mapDispatchToProps) (Rating)