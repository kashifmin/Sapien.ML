import { Tensor } from 'core/types'
export abstract class Layer{
    /*
        this method is does all the operation of a single layer.
        
    */

    abstract feedForward(input:Tensor):Tensor;

}