import colors from 'colors';

export default {
  entry: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    color: colors.darkPurple,
    padding: 15,
    border: `1px solid ${colors.darkPurple}`,
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
    fontColor: colors.lightPurple
  },

  clear: {
    fill: colors.lightPurple
  },

  add: {
    border: `1px solid ${colors.green}`,
    borderRadius: 5,
    fill: colors.green
  },

  remove: {
    border: `1px solid ${colors.red}`,
    borderRadius: 5,
    fill: colors.red,
    marginRight: 15
  }
};
