import { Point } from '@pixi/math';
import type { EventBoundary } from './EventBoundary';
import type { FederatedEventTarget } from './FederatedEventTarget';

/**
 * A PixiJS compatible {@code Touch} event.
 * @memberof events
 */
export interface PixiTouch extends Touch {
  button: number;
  buttons: number;
  isPrimary: boolean;
  width: number;
  height: number;
  tiltX: number;
  tiltY: number;
  pointerType: string;
  pointerId: number;
  pressure: number;
  twist: number;
  tangentialPressure: number;
  layerX: number;
  layerY: number;
  offsetX: number;
  offsetY: number;
  isNormalized: boolean;
  type: string;
}

/**
 * An DOM-compatible synthetic event implementation that is "forwarded" on behalf of an original
 * FederatedEvent or native {@link https://dom.spec.whatwg.org/#event Event}.
 * @typeParam N - The type of native event held.
 * @memberof events
 */
export class FederatedEvent<N extends UIEvent | PixiTouch = UIEvent | PixiTouch>
  implements UIEvent
{
  /** Flags whether this event bubbles. This will take effect only if it is set before propagation. */
  bubbles = true;

  /** @deprecated since 7.0.0 */
  cancelBubble = true;

  /**
   * Flags whether this event can be canceled using {@link FederatedEvent.preventDefault}. This is always
   * false (for now).
   */
  readonly cancelable = false;

  /**
   * Flag added for compatibility with DOM {@code Event}. It is not used in the Federated Events
   * API.
   * @see https://dom.spec.whatwg.org/#dom-event-composed
   */
  readonly composed = false;

  /** The listeners of the event target that are being notified. */
  currentTarget: FederatedEventTarget;

  /** Flags whether the default response of the user agent was prevent through this event. */
  defaultPrevented = false;

  /**
   * The propagation phase.
   * @default {@link FederatedEvent.NONE}
   */
  eventPhase = FederatedEvent.prototype.NONE;

  /** Flags whether this is a user-trusted event */
  isTrusted: boolean;

  /** @deprecated since 7.0.0 */
  returnValue: boolean;

  /** @deprecated since 7.0.0 */
  srcElement: EventTarget;

  /** The event target that this will be dispatched to. */
  target: FederatedEventTarget;

  /** The timestamp of when the event was created. */
  timeStamp: number;

  /** The type of event, e.g. {@code "mouseup"}. */
  type: string;

  /** The native event that caused the foremost original event. */
  nativeEvent: N;

  /** The original event that caused this event, if any. */
  originalEvent: FederatedEvent<N>;

  /** Flags whether propagation was stopped. */
  propagationStopped = false;

  /** Flags whether propagation was immediately stopped. */
  propagationImmediatelyStopped = false;

  /** The composed path of the event's propagation. The {@code target} is at the end. */
  path: FederatedEventTarget[];

  /** The {@link EventBoundary} that manages this event. Null for root events. */
  readonly manager: EventBoundary;

  /** Event-specific detail */
  detail: number;

  /** The global Window object. */
  view: WindowProxy;

  /**
   * Not supported.
   * @deprecated since 7.0.0
   */
  which: number;

  /** The coordinates of the event relative to the nearest DOM layer. This is a non-standard property. */
  layer: Point = new Point();

  /** @readonly */
  get layerX(): number {
    return this.layer.x;
  }

  /** @readonly */
  get layerY(): number {
    return this.layer.y;
  }

  /** The coordinates of the event relative to the DOM document. This is a non-standard property. */
  page: Point = new Point();

  /** @readonly */
  get pageX(): number {
    return this.page.x;
  }

  /** @readonly */
  get pageY(): number {
    return this.page.y;
  }

  /**
   * @param manager - The event boundary which manages this event. Propagation can only occur
   *  within the boundary's jurisdiction.
   */
  constructor(manager: EventBoundary) {
    this.manager = manager;
  }

  /**
   * Fallback for the deprecated @code{InteractionEvent.data}.
   * @deprecated since 7.0.0
   */
  get data(): this {
    return this;
  }

  /** The propagation path for this event. Alias for {@link EventBoundary.propagationPath}. */
  composedPath(): FederatedEventTarget[] {
    // Find the propagation path if it isn't cached or if the target has changed since since
    // the last evaluation.
    if (
      this.manager &&
      (!this.path || this.path[this.path.length - 1] !== this.target)
    ) {
      this.path = this.target ? this.manager.propagationPath(this.target) : [];
    }

    return this.path;
  }

  /**
   * Unimplemented method included for implementing the DOM interface {@code Event}. It will throw an {@code Error}.
   * @deprecated
   * @param _type
   * @param _bubbles
   * @param _cancelable
   */
  initEvent(_type: string, _bubbles?: boolean, _cancelable?: boolean): void {
    throw new Error(
      'initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.',
    );
  }

  /**
   * Unimplemented method included for implementing the DOM interface {@code UIEvent}. It will throw an {@code Error}.
   * @deprecated
   * @param _typeArg
   * @param _bubblesArg
   * @param _cancelableArg
   * @param _viewArg
   * @param _detailArg
   */
  initUIEvent(
    _typeArg: string,
    _bubblesArg?: boolean,
    _cancelableArg?: boolean,
    _viewArg?: Window | null,
    _detailArg?: number,
  ): void {
    throw new Error(
      'initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.',
    );
  }

  /** Prevent default behavior of PixiJS and the user agent. */
  preventDefault(): void {
    if (this.nativeEvent instanceof Event && this.nativeEvent.cancelable) {
      this.nativeEvent.preventDefault();
    }

    this.defaultPrevented = true;
  }

  /**
   * Stop this event from propagating to any addition listeners, including on the
   * {@link FederatedEventTarget.currentTarget currentTarget} and also the following
   * event targets on the propagation path.
   */
  stopImmediatePropagation(): void {
    this.propagationImmediatelyStopped = true;
  }

  /**
   * Stop this event from propagating to the next {@link FederatedEventTarget}. The rest of the listeners
   * on the {@link FederatedEventTarget.currentTarget currentTarget} will still be notified.
   */
  stopPropagation(): void {
    this.propagationStopped = true;
  }

  readonly NONE = 0;
  readonly CAPTURING_PHASE = 1;
  readonly AT_TARGET = 2;
  readonly BUBBLING_PHASE = 3;
}
