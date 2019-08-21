import React, { PureComponent } from 'react';
import CaseSelect from './selectcase'
import CaseItem from './caseitem'

class Case extends PureComponent {

    render() {
        return (
            <div>
               <CaseSelect />
               <CaseItem />
            </div>
        )
    }

}


export default Case;