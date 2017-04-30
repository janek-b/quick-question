import Ember from 'ember';

export function timeFormat(params/*, hash*/) {
  var date = moment(new Date(params));
  var formatDate = date.format("MMM D, YYYY") + " at " + date.format("h:mm a") + ` (${date.fromNow()})`;
  return formatDate;
}

export default Ember.Helper.helper(timeFormat);
