import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {
    messageParent="happy to use lwc";
    name="kushal";
    color;
    size;
    handleClick()
    {
        this.template.querySelector("c-child-lwc").end="see the change";
        console.log(this.template.querySelector("c-child-lwc").end);
        this.template.querySelector("c-child-lwc").childmethod("good evening");
        
    }
    handleparent(ev)
    {
        this.name=ev.detail.name;
        this.color=ev.detail.color;
        this.size=ev.detail.size;
        console.log(ev.detail.name);
    }
}
