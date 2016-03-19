import colors from 'colors';

export default {
  total: {
    fontSize: 20,
    color: colors.darkPurple,
    marginTop: 20
  },
  totalValue: {
    border: `1px solid ${colors.darkPurple}`,
    borderRadius: 5,
    marginLeft: 20,
    padding: 10,
    fontWeight: 'bold'
  },
  form: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto'
  },
  input: {
    color: colors.darkPurple,
    border: `1px solid ${colors.darkPurple}`,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    outline: 'none'
  },
  inputIcon: {
    fill: colors.darkPurple
  },
  buttonReset: {
    marginLeft: 20,
    background: 'none',
    border: 'none',
    padding: 0,
    outline: 'none'
  }
};
