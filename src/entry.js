import { render } from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Counter from 'components/counter';

render(<Counter />, document.getElementById('app'));

injectTapEventPlugin();
