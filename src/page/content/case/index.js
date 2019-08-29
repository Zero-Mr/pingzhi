import React, { PureComponent } from 'react';
import CaseSelect from './selectcase'
import CaseItem from './caseitem'

class Case extends PureComponent {

    render() {
        let urlID = this.props.match.params.id;
        return (
            <div>
               <CaseSelect urlID={urlID} />
               <CaseItem  />
            </div>
        )
    }
    componentDidMount(){
        document.title= "装修案例"
    }

}


export default Case;