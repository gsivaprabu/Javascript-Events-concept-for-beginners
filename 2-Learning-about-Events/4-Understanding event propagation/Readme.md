# Understanding event propagation
- Single event can capture all events.
- An element can capture child events.
- A good reason to use addEventListener()
- Not compatible with older version of ie

### Capturing Vs Bubbling

- Browsers disagree on the order.
- Capturing goes down the DOM.
- Bubbling goes up the DOM. [Refer http://quirksmode.org/js/events_order.html](http://quirksmode.org/js/events_order.html)
