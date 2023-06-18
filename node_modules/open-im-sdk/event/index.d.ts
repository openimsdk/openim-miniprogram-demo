import { CbEvents } from "../constants";
import { WsResponse } from "../types";
declare type Cbfn = (data: WsResponse) => void;
declare class Emitter {
    private events;
    constructor();
    emit(event: CbEvents, data: WsResponse): this;
    on(event: CbEvents, fn: Cbfn): this;
    off(event: CbEvents, fn: Cbfn): this;
}
export default Emitter;
