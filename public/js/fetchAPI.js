const fetchAPI = (file, requestType, url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4)
      if (xhr.status === 200) {
        // console.log(JSON.parse(xhr.responseText).data);
        const response = JSON.parse(xhr.responseText);
        // console.log(response.data);
        if(response.data) {
          callback(null,response.data);
        }
        else callback(new TypeError('no response'));
      } else {
        callback(new TypeError('There Is Error in Server'));
      }
  };
  xhr.open(requestType, url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(JSON.stringify(file));
};
