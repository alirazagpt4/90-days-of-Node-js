import { EventEmitter } from "events";

class myEmitter extends EventEmitter{}

const eventEmitter = new myEmitter();

export default eventEmitter;