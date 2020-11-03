import IPerson from "./person/IPerson"
import Person from "./person/Person"    // export default로 지정하면 하나만 가능하기 때문에 { } 없이 import 가능
import Chance from 'chance'
import * as R from 'ramda'

const chance = new Chance()

let persons: IPerson[] = R.range(0, 2)
    .map((n: number) => new Person(chance.name(), chance.age()))

console.log(persons)