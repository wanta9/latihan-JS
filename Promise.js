// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/users',
//     success: (mhs) => console.log(mhs)
// });

let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          success(xhr.response);
        } else if (xhr.status == 404) {
          error(xhr.response);
        }
      }
    };
  
    xhr.open('get', url);
    xhr.send();