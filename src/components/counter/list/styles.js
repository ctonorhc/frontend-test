import { COLOR } from 'enums';

export default {
  entry: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    color: COLOR.PURPLE,
    padding: 15,
    border: `1px solid ${COLOR.PURPLE}`,
    borderRadius: 5,
    marginBottom: 5
  },

  label: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },

  modifiers: {
    marginLeft: 'auto'
  },

  count: {
    fontSize: 12,
    fontColor: COLOR.LIGHT_PURPLE
  },

  clear: {
    fill: COLOR.LIGHT_PURPLE
  },

  add: {
    border: `1px solid ${COLOR.GREEN}`,
    borderRadius: 5,
    fill: COLOR.GREEN
  },

  remove: {
    border: `1px solid ${COLOR.RED}`,
    borderRadius: 5,
    fill: COLOR.RED,
    marginRight: 15
  }
};
