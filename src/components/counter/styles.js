import { COLOR } from 'enums';

export default {
  total: {
    fontSize: 20,
    color: COLOR.PURPLE,
    marginTop: 20
  },
  totalValue: {
    border: `1px solid ${COLOR.PURPLE}`,
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
    color: COLOR.PURPLE,
    border: `1px solid ${COLOR.PURPLE}`,
    borderRadius: 5,
    fontSize: 18,
    padding: 10,
    outline: 'none'
  },
  inputIcon: {
    fill: COLOR.PURPLE
  },
  buttonReset: {
    marginLeft: 20,
    background: 'none',
    border: 'none',
    padding: 0,
    outline: 'none'
  }
};
