import { LightningElement,api} from 'lwc';

export default class ChildLwc extends LightningElement {
   @api message;
    start="im doing it";
    @api end="im ending it";

    @api childmethod(e)
    {
        this.start=e;
    }
    handlecustom()
    {
        const eventtopass=new CustomEvent('childdata',{
            detail:{
                name: 'iphone 13',
                color:'black',
                size:'6.7'
            }
        });
        this.dispatchEvent(eventtopass);
    }
}