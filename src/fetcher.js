import Bluebird from 'bluebird';
import superagent from 'superagent';

const get = url => request({ type: 'get', url });

const post = (url, body) => request({ type: 'post', url, body });

const remove = (url, body) => request({ type: 'del', url, body });

function request({ type, url, body = {} }) {
  return new Bluebird((resolve, reject) => {
    superagent[type](url)
      .send(body)
      .end((err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      });
  });
}

export default { get, post };
