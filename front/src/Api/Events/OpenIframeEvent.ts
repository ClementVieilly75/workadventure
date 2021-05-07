import * as tg from "generic-type-guard";



export const isOpenIframeEvent =
    new tg.IsInterface().withProperties({
        html: tg.isString,
        targetObject: tg.isString,
    }).get();

/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export type OpenIframeEvent = tg.GuardedType<typeof isOpenIframeEvent>;
