import IPerson from "./person/IPerson"
import Person, { makePerson } from "./person/Person"    // export default로 지정하면 하나만 가능하기 때문에 { } 없이 import 가능

const testMakePerson = (): void => {
    let jane: IPerson = makePerson("Jane")
    let jack: IPerson = makePerson("Jack")
    console.log(jane, jack)
}

testMakePerson()