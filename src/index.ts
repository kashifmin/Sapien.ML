import { HelloWorld } from './hello';

export function hello(): string {
    // test import
    let myObj: HelloWorld = new HelloWorld();
    return myObj.printHello();
}