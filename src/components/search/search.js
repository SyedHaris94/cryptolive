import React, {Component} from 'react'

class FilteredList extends React.Component{
    constructor(){
        super();
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns",
                

                ],
            items: []

        }
        this.filterList = this.filterList.bind(this);
        }
    
    filterList(event){
      var updatedList = this.state.items;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
    }
 
    componentWillMount(){
        this.setState({items: this.state.initialItems})
    }
    render(){
        console.log('sds',this.state.items)
      return (
        <div className="filter-list">
          <form>
          <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
          </fieldset>
          </form>
        <List items={this.state.items}/>
        </div>
      );
    }
  }

  export default FilteredList
  
class List extends React.Component{
    render(){
      return (
        <ul className="list-group">
        {
          this.props.items.map(function(item) {
            return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          })
         }
        </ul>
      )  
    }
  }
 
