import { Layer } from 'core/layers'
import { Tensor } from 'core/types'

export class Dense extends Layer {
    feedForward() : Tensor {
        return new Tensor()
    }
}
