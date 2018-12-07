type ClientFrameType = "auxiliary" | "top-level" | "nested" | "none";
type ClientMatchTypes = "window" | "worker" | "sharedworker" | "all";
type WindowClientState = "hidden" | "visible" | "prerender" | "unloaded";

interface Client {
    frameType: ClientFrameType;
    id: string;
    url: string;
    postMessage(message: any, transfer?: any[]): void;
}

interface ClientMatchOptions {
    includeUncontrolled?: boolean;
    type?: ClientMatchTypes;
}

interface WindowClient {
    focused: boolean;
    visibilityState: WindowClientState;
    focus(): Promise<WindowClient>;
    navigate(url: string): Promise<WindowClient>;
}

interface Clients {
    claim(): Promise<any>;
    get(id: string): Promise<Client>;
    matchAll(options?: ClientMatchOptions): Promise<Array<Client>>;
    openWindow(url: string): Promise<WindowClient>;
}

interface ExtendableEvent extends Event {
    waitUntil(fn: Promise<any>): void;
    respondWith(response: Promise<Response> | Response): Promise<Response>;
}

interface FetchEvent extends ExtendableEvent {
    request: Request;
    clientId: string;
}

interface InstallEvent extends ExtendableEvent {
    activeWorker: ServiceWorker;
}

interface ActivateEvent extends ExtendableEvent {
    
}

declare interface ServiceWorkerGlobalScope {
    clients: Clients
    onfetch: (event: FetchEvent) => any
    oninstall: (event: InstallEvent) => any
    onactivate: (event: ActivateEvent) => any
    skipWaiting(): void
}