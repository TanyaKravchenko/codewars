// function getImagesAjax (pageNumber) {
//    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=3`)
//    return promise;
// }
function getImages (pageNumber) {
   const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=3`)
   return promise.then((data) => {
      return data.data;
   });
}
