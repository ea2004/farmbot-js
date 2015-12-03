// TODO: 'off' function
// TODO: 'once' function
FarmbotJS.events = {
  event: function(name) {
    this.events = this.events || {};
    this.events[name] = this.events[name] || [];
    return this.events[name];
  },

  on: function(event, callback) {
    this.event(event).push(callback);
  },

  emit: function(event, data) {
    this.event(event).forEach(function(handler) {
      handler(data);
    });
  }
};
