import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear():void,
    render(fullList:FullList): void,
}

export default class ListTemplate implements DOMList{

    ul: HTMLUListElement
    private constructor(){
        this.ul = document.getElementById("listItem") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList:FullList):void{
       this.clear()

       fullList.list.forEach(item=>{
        const li = document.createElement("li") as HTMLElement
        li.className = 'item'

        const check = document.createElement('input') as HTMLInputElement
        check.type = 'checkbox'
        check.id = item.id
        check.checked = item.checked
        li.append(check)

        check.addEventListener('change', ()=>{
            item.checked = !item.checked
            fullList.save()
        })

        const label = document.createElement('label') as HTMLLabelElement
        label.innerText = item.item
        li.append(label)

       })
    }
}

