import DS from 'ember-data';
// import { formatDate } from '../helpers/format-date';

export default DS.Transform.extend({
  deserialize(serialized) {
   /*  if (serialized) {
      return formatDate([serialized]);
    } */
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
