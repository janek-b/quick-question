import Ember from 'ember';

export function timeFormat(params/*, hash*/) {
  var date = moment(new Date(params));
  if (date.isSame(moment(), 'year')) {
    return date.format("MMM D") + " at " + date.format("h:mm a") + ` (${date.fromNow()})`;
  } else {
    return date.format("MMM D, YYYY") + " at " + date.format("h:mm a") + ` (${date.fromNow()})`;
  }
}

export default Ember.Helper.helper(timeFormat);
