// Fetch Function
const fetch1 = (URL, method, file, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = xhr.responseText;
        if (response)
          response = JSON.parse(response);
        if (response.result) {
          callback(null, response.result);
        } else {
          callback(response.err);
        }
      } else {
        callback('There is error in request ');
      }
    }
  };
  xhr.open(method, URL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(file));
};
